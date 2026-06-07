/**
 * AboutSection.js — Sobre Mim, Habilidades, Experiência
 */
import { useEffect, useState } from 'react';
import { TechIcon } from '../components/tech-icons/TechIcon.js';
import { useLanguage } from '../contexts/LanguageContext.js';

const skills = [
  {
    categoryKey: 'frontend',
    items: [
      { name: 'React', iconKey: 'react' },
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'Tailwind CSS', iconKey: 'tailwind css' },
      { name: 'Framer Motion', iconKey: 'framer motion' },
    ],
  },
  {
    categoryKey: 'backend',
    items: [
      { name: 'Node.js', iconKey: 'node.js' },
      { name: 'Express', iconKey: 'express' },
      { name: 'tRPC', iconKey: 'trpc' },
      { name: 'MySQL', iconKey: 'mysql' },
    ],
  },
  {
    categoryKey: 'tools',
    items: [
      { name: 'Figma', iconKey: 'figma' },
      { name: 'Git', iconKey: 'git' },
      { name: 'Vite', iconKey: 'vite' },
      { name: 'Docker', iconKey: 'docker' },
    ],
  },
];

export function AboutSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categoryLabel = (key) => {
    if (key === 'frontend') return t.about.frontend;
    if (key === 'backend') return t.about.backend;
    return t.about.tools;
  };

  const experience = [
    {
      title: t.about.exp1Title,
      company: t.about.exp1Company,
      period: t.about.exp1Period,
      desc1: t.about.exp1Desc1,
      desc2: t.about.exp1Desc2,
    },
    {
      title: t.about.exp2Title,
      company: t.about.exp2Company,
      period: t.about.exp2Period,
      desc1: t.about.exp2Desc1,
      desc2: t.about.exp2Desc2,
    },
    {
      title: t.about.exp3Title,
      company: t.about.exp3Company,
      period: t.about.exp3Period,
      desc1: t.about.exp3Desc1,
      desc2: '',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen relative z-20 pt-24 pb-16 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 animate-glow-pulse">
            <span className="bg-gradient-to-r from-[#00ff88] via-[#00d9ff] to-[#00ff88] bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d9ff]" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold section-title-base section-title-wave mb-6">{t.about.whoIAm}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.about.bio1}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t.about.bio2}
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-[#1a1f3a]/50 border border-[#00ff88]/30 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#00d9ff] mb-4">{t.about.quickFacts}</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <span className="text-[#00ff88]">📍 {t.about.location}</span> {t.about.locationValue}
                </li>
                <li>
                  <span className="text-[#00ff88]">💼 {t.about.experience}</span> {t.about.experienceValue}
                </li>
                <li>
                  <span className="text-[#00ff88]">🎯 {t.about.focus}</span> {t.about.focusValue}
                </li>
                <li>
                  <span className="text-[#00ff88]">🚀 {t.about.passion}</span> {t.about.passionValue}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold section-title-base section-title-wave mb-12">{t.about.skillsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`bg-[#1a1f3a]/50 border border-[#00d9ff]/30 p-6 rounded-lg backdrop-blur-sm transition-all duration-1000 hover:border-[#00ff88]/60 hover:shadow-lg hover:shadow-[#00ff88]/20 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-[#00d9ff] mb-4">{categoryLabel(skill.categoryKey)}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-300 flex items-center gap-3 group hover:translate-x-1 transition-transform"
                    >
                      <TechIcon
                        name={item.iconKey}
                        size={20}
                        className="opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform"
                      />
                      <span className="group-hover:text-white transition-colors">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold section-title-base section-title-wave mb-12">{t.about.experienceTitle}</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className={`border-l-2 border-[#00ff88] pl-8 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${500 + idx * 100}ms` }}
              >
                <div className="absolute w-4 h-4 bg-[#00ff88] rounded-full -left-[9px] top-0" />
                <h3 className="text-2xl font-bold text-[#00d9ff]">{exp.title}</h3>
                <p className="text-[#00ff88] font-semibold mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300 mb-2">{exp.desc1}</p>
                {exp.desc2 && <p className="text-gray-300">{exp.desc2}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
