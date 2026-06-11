/**
 * App.js — Componente raiz
 *
 * Equivalente ao App.tsx do projeto original, sem dependência
 * do shadcn/ui (Toaster, TooltipProvider) — substituídos por
 * implementação inline (toast local no ContactSection).
 */
import ErrorBoundary from './components/ErrorBoundary.js';
import { ThemeProvider } from './contexts/ThemeContext.js';
import { LanguageProvider } from './contexts/LanguageContext.js';
import { Navigation } from './components/Navigation.js';
import { Footer } from './components/Footer.js';
import { VideoBackground } from './components/VideoBackground.js';

import { HomeSection } from './sections/HomeSection.js';
import { AboutSection } from './sections/AboutSection.js';
import { ProjectsSection } from './sections/ProjectsSection.js';
import { VisitorsSection } from './sections/VisitorsSection.js';
import { ContactSection } from './sections/ContactSection.js';

export function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="dark">
          {/* VideoBackground (z-0) — camada mais profunda do site, sempre visivel */}
          <VideoBackground />
          {/* Container raiz (z-10) — todo o conteudo do site fica ACIMA do video
              SEM background solido (removido bg-[#0a0e27]) para o video aparecer atras */}
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              <HomeSection />
              <AboutSection />
              <ProjectsSection />
              <VisitorsSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
