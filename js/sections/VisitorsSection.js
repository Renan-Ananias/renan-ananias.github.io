/**
 * VisitorsSection.js — Wrapper para o VisitorsMap
 */
import { useEffect, useState } from 'react';
import { VisitorsMap } from '../components/VisitorsMap.js';
import { useLanguage } from '../contexts/LanguageContext.js';

export function VisitorsSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="visitors"
      className="min-h-screen relative z-20 pt-24 pb-16 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 animate-glow-pulse">
            <span className="bg-gradient-to-r from-[#00ff88] via-[#00d9ff] to-[#00ff88] bg-clip-text text-transparent">
              {t.visitors.title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d9ff]" />
          <p className="section-title-base section-title-wave mt-6 text-lg">
            {t.visitors.subtitle}
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <VisitorsMap />
        </div>
      </div>
    </section>
  );
}
