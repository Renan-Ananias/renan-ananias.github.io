/**
 * ProjectsSection.js — Lista de projetos + testemunhos
 */
import { useEffect, useState } from 'react';
import { ExternalLink, Github, Star } from '../components/Icons.js';
import { useLanguage } from '../contexts/LanguageContext.js';

const projects = [
  {
    id: 1,
    title: 'CryWolfMU',
    period: 'Web Design & Multimedia Production (Jan 2026 – Jun 2026)',
    descKey: 'proj1Desc',
    tags: ['Website Design', 'Digital Art Composition', 'Promotional Video Editing & Visual Branding'],
    image: null,
    gradient: 'from-[#2a0a3a] via-[#4a0a4e] to-[#0a0e27]',
    emoji: '🐺',
    link: 'https://www.crywolfmu.com',
    linkType: 'visit',
  },
  {
    id: 2,
    title: "The Tail's of Fate",
    period: 'Dark Romance Fantasy Novel (Part I Completed – 2026)',
    descKey: 'proj2Desc',
    tags: ['Writing', 'Worldbuilding', 'Digital Art Composition'],
    image: 'img/capa_e_contra_capa_livro.png',
    gradient: '',
    emoji: '',
    link: 'https://www.amazon.com.br',
    linkType: 'visit',
  },
  {
    id: 3,
    title: 'Web Design Portfolio Projects for 50+ Clients',
    period: '2019 – Present',
    descKey: 'proj3Desc',
    tags: ['Web Design', 'UI/UX', 'Branding', 'Digital Content'],
    image: 'img/50_portfolio.jpeg',
    gradient: '',
    emoji: '',
    link: '#contact',
    linkType: 'visit',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    period: '',
    descKey: 'proj4Desc',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    gradient: '',
    link: '#',
    linkType: 'view',
    github: '#',
  },
  {
    id: 5,
    title: 'AI Chat Interface',
    period: '',
    descKey: 'proj5Desc',
    tags: ['React', 'OpenAI', 'WebSocket', 'Python'],
    image: 'img/AI_Chat_Interface.jpeg',
    gradient: '',
    link: '#',
    linkType: 'view',
    github: '#',
  },
];

const testimonials = [
  {
    flag: '🇧🇷',
    titleKey: 'test1Title',
    textKey: 'test1Text',
    author: 'GABRIEL RIBEIRO',
    country: 'BR',
  },
  {
    flag: '🇺🇸',
    titleKey: 'test2Title',
    textKey: 'test2Text',
    author: 'ANDRE',
    country: 'US',
  },
];

export function ProjectsSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [privateMsgFor, setPrivateMsgFor] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getDescription = (key) => t.projects[key];
  const getTestTitle = (key) => t.projects[key];
  const getTestText = (key) => t.projects[key];
  const getLinkLabel = (linkType) =>
    linkType === 'visit' ? t.projects.visitSite : t.projects.viewProject;

  /**
   * Decide o que fazer quando o usuário clica num link de projeto.
   * - 'http...'  -> abre URL externa em nova aba
   * - '#anchor'  -> scroll suave até a secao (ex: #contact)
   * - '#' ou ''  -> mostra modal "o dono pediu para nao divulgar"
   */
  const handleLinkClick = (link) => {
    if (!link || link === '#') {
      // Link privado -> mostra mensagem traduzida
      setPrivateMsgFor(true);
      return;
    }
    if (link.startsWith('http://') || link.startsWith('https://')) {
      // Link externo -> nova aba
      window.open(link, '_blank', 'noopener,noreferrer');
      return;
    }
    if (link.startsWith('#') && link.length > 1) {
      // Ancora interna -> scroll suave
      const targetId = link.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
  };

  const closePrivateMsg = () => setPrivateMsgFor(null);

  return (
    <section
      id="projects"
      className="min-h-screen relative z-20 pt-24 pb-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 animate-glow-pulse">
            <span className="bg-gradient-to-r from-[#00ff88] via-[#00d9ff] to-[#00ff88] bg-clip-text text-transparent">
              {t.projects.title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d9ff]" />
          <p className="section-title-base section-title-wave mt-6 text-lg">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg overflow-hidden backdrop-blur-sm hover:border-[#00ff88]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff88]/20 h-full flex flex-col">
                <div className={`relative overflow-hidden h-48 ${project.image ? '' : `bg-gradient-to-br ${project.gradient}`}`}>
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                        {project.emoji}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#00d9ff] mb-1 group-hover:text-[#00ff88] transition-colors">
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="text-[#00ff88] text-xs font-semibold mb-3 uppercase tracking-wider">
                      {project.period}
                    </p>
                  )}
                  <p className="text-gray-300 text-sm mb-4 flex-grow">{getDescription(project.descKey)}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-[#00d9ff]/20">
                    <button
                      type="button"
                      onClick={() => handleLinkClick(project.link)}
                      className="flex items-center gap-2 text-[#00ff88] hover:text-[#00d9ff] transition-colors text-sm cursor-pointer bg-transparent border-none p-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {getLinkLabel(project.linkType)}
                    </button>
                    {project.github && (
                      <button
                        type="button"
                        onClick={() => handleLinkClick(project.github)}
                        className="flex items-center gap-2 text-[#00d9ff] hover:text-[#00ff88] transition-colors text-sm cursor-pointer bg-transparent border-none p-0"
                      >
                        <Github className="w-4 h-4" />
                        {t.projects.viewCode}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold section-title-base section-title-wave mb-12 text-center">
            {t.projects.testimonials}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`bg-[#1a1f3a]/50 border border-[#00d9ff]/30 p-8 rounded-lg backdrop-blur-sm transition-all duration-1000 hover:border-[#00ff88]/60 hover:shadow-lg hover:shadow-[#00ff88]/20 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(projects.length + idx) * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="text-lg font-bold text-[#00ff88] mb-3">
                  "{getTestTitle(testimonial.titleKey)}"
                </h3>

                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  {getTestText(testimonial.textKey)}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#00d9ff]/20">
                  <p className="text-white font-bold tracking-wider text-sm">
                    {testimonial.author}
                  </p>
                  <span className="text-2xl" title={testimonial.country}>
                    {testimonial.flag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal: mensagem de link privado */}
      {privateMsgFor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-pointer p-4"
          onClick={closePrivateMsg}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#1a1f3a] border-2 border-[#00d9ff] rounded-lg p-8 max-w-md w-full shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🔒</div>
                <h3 className="text-xl font-bold text-[#00ff88]">Private</h3>
              </div>
              <button
                type="button"
                onClick={closePrivateMsg}
                className="text-gray-400 hover:text-white text-2xl leading-none cursor-pointer bg-transparent border-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="text-gray-200 text-base leading-relaxed">
              {t.projects.privateLinkMessage}
            </p>
            <button
              type="button"
              onClick={closePrivateMsg}
              className="mt-6 w-full px-4 py-2 bg-[#00ff88] text-[#0a0e27] font-semibold rounded-lg hover:opacity-90 cursor-pointer border-none"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
