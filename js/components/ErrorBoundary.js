/**
 * ErrorBoundary.js — Error boundary do React
 *
 * Equivalente ao ErrorBoundary.tsx do projeto original, sem
 * dependência de shadcn/ui (AlertTriangle, RotateCcw vêm de Icons.js).
 *
 * Nota: `Component` vem do cabeçalho injetado por concatenar.py
 * (que desestrutura `const { Component, ... } = React;` no início do bundle).
 */
import { AlertTriangle, RotateCcw } from './Icons.js';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-[#0a0e27]">
          <div className="flex flex-col items-center w-full max-w-2xl p-8">
            <AlertTriangle
              size={48}
              className="text-[#ff4444] mb-6 flex-shrink-0"
            />
            <h2 className="text-xl mb-4 text-white">An unexpected error occurred.</h2>
            <div className="p-4 w-full rounded bg-[#1a1f3a] overflow-auto mb-6">
              <pre className="text-sm text-gray-300 whitespace-break-spaces">
                {this.state.error?.stack}
              </pre>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00ff88] text-[#0a0e27] hover:opacity-90 cursor-pointer font-semibold"
            >
              <RotateCcw size={16} />
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
