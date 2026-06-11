/* ============================================================
 * bundle.js - Gerado automaticamente por concatenar.py
 * NAO EDITE ESTE ARQUIVO DIRETAMENTE.
 * Edite os arquivos individuais em js/ e rode concatenar.py
 * (ou use o iniciar-servidor-sem-build.bat que faz isso pra voce)
 * ============================================================ */

/* ========== React Globals (CDN UMD) ========== */
/* Equivalente a: import { ... } from "react"; */
const {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  Component
} = React;

/* ========== js/utils.js ========== */
/**
 * utils.js — Utilitários gerais
 *
 * Equivalente ao `cn()` do projeto original (clsx + tailwind-merge),
 * mas simplificado para não precisar de dependências externas.
 *
 * Concatena classes condicionalmente (falsy values são ignorados).
 */
function cn(...inputs) {
  return inputs
    .flat(Infinity)
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ========== js/brain_circuits.js ========== */
// AUTO-GERADO por extrair_circuitos.py - nao editar
// Cada grupo tem uma IMAGEM BINARIA (branco onde tem circuito)
// O canvas renderiza com cor neon + glow
const brainCircuits = {
  "imageSize": [
    700,
    700
  ],
  "chipCenter": [
    371,
    272
  ],
  "chipSize": 104,
  "chipBbox": [
    330,
    220,
    82,
    104
  ],
  "groups": {
    "Projects": {
      "image": "img/brain_projects.png",
      "center": [
        355,
        159
      ],
      "pixelCount": 21541
    },
    "About": {
      "image": "img/brain_about.png",
      "center": [
        199,
        253
      ],
      "pixelCount": 23781
    },
    "Visitors": {
      "image": "img/brain_visitors.png",
      "center": [
        389,
        414
      ],
      "pixelCount": 19694
    },
    "Contact": {
      "image": "img/brain_contact.png",
      "center": [
        505,
        296
      ],
      "pixelCount": 28329
    }
  }
};

/* ========== js/i18n/dictionaries.js ========== */
/**
 * dictionaries.js — Traduções i18n
 *
 * Idiomas suportados: pt-br (padrão), en, es, zh-cn, zh-tw, ja
 *
 * Estrutura: pt-br é a fonte da verdade. Os outros idiomas herdam
 * de pt-br para qualquer chave não traduzida (fallback automático).
 *
 * Idêntico ao `client/src/i18n/dictionaries.ts` (apenas sem tipos TS).
 */

const SUPPORTED_LANGUAGES = [
  { code: 'pt-br', label: 'Português (BR)', flag: '🇧🇷' },
  { code: 'en',    label: 'English (US)',    flag: '🇺🇸' },
  { code: 'es',    label: 'Español',         flag: '🇪🇸' },
  { code: 'zh-cn', label: '中文 (简体)',      flag: '🇨🇳' },
  { code: 'zh-tw', label: '中文 (繁體)',      flag: '🇹🇼' },
  { code: 'ja',    label: '日本語',           flag: '🇯🇵' },
];

// ====== Dicionário fonte: Português (Brasil) ======
const ptBR = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    visitors: 'Visitantes',
    contact: 'Contato',
    language: 'Idioma',
  },
  home: {
    subtitle: 'DESENVOLVEDOR CRIATIVO',
    tagline: 'Transformando ideias em experiências digitais interativas com design e tecnologia de ponta',
    cta: 'Explore Meu Trabalho',
  },
  about: {
    title: 'Sobre Mim',
    whoIAm: 'Quem Sou',
    bio1: 'Sou um desenvolvedor criativo apaixonado por construir experiências digitais bonitas e funcionais. Com uma base sólida tanto em design quanto em desenvolvimento, eu uno a estética à funcionalidade.',
    bio2: 'Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam, evoluindo para uma carreira dedicada a criar produtos digitais significativos que os usuários amam.',
    quickFacts: 'Fatos Rápidos',
    location: 'Localização:',
    experience: 'Experiência:',
    focus: 'Foco:',
    passion: 'Paixão:',
    skillsTitle: 'Habilidades & Expertise',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Ferramentas',
    experienceTitle: 'Experiência',
    locationValue: 'Rio de Janeiro, Brasil',
    experienceValue: '10+ anos',
    focusValue: 'Web Design, UI UX & Development',
    passionValue: 'Experiências Interativas',
    exp1Title: 'Freelance Web Designer & Digital Content Creator',
    exp1Company: 'Autônomo',
    exp1Period: '2019 – Presente',
    exp1Desc1: 'Desenvolvimento, personalização, manutenção e otimização de websites para clientes e projetos pessoais.',
    exp1Desc2: 'Criação de assets digitais, edição de imagens, conteúdo multimídia, identidade visual e materiais promocionais utilizando Photoshop e ferramentas com IA.',
    exp2Title: 'Diversas Funções Profissionais & Projetos Independentes',
    exp2Company: 'Autônomo',
    exp2Period: '2016 – 2019',
    exp2Desc1: 'Experiência em múltiplos setores, incluindo construção civil, trabalho braçal, serviços e projetos digitais independentes.',
    exp2Desc2: 'Desenvolvi habilidades práticas em trabalho em equipe, adaptabilidade, resiliência, atendimento ao cliente e resolução de problemas, enquanto estudava concomitantemente desenvolvimento web, programação e design digital.',
    exp3Title: 'Serviço Militar – Força Aérea Brasileira',
    exp3Company: 'Força Aérea Brasileira',
    exp3Period: '2010 – 2016',
    exp3Desc1: 'Carreira militar focada em disciplina, trabalho em equipe, planejamento operacional, responsabilidade e desempenho sob pressão.',
  },
  projects: {
    title: 'Projetos',
    subtitle: 'Uma seleção dos meus trabalhos recentes',
    viewProject: 'Ver Projeto',
    viewCode: 'Ver Código',
    testimonials: 'Comentários de Clientes',
    visitSite: 'Visitar Site',
    test1Title: 'Altamente capaz e flexível',
    test1Text: 'É muito fácil colaborar com o Renan. Ele tem ótimas ideias e é extremamente capaz de atender a demandas urgentes!',
    test2Title: 'Um designer verdadeiramente inspirador',
    test2Text: 'O olhar do Sr. Ananias para o design é incrível. Ele consegue destacar a beleza em coisas simples, um designer verdadeiramente inspirador.',
    proj1Desc: 'Identidade visual, site personalizado e conteúdo multimídia para um projeto de comunidade gamer.',
    proj2Desc: 'Romance original que combina dark romance e fantasia, com arte digital personalizada para construção de mundo e capa.',
    proj3Desc: 'Uma coleção de projetos de design de sites, branding e conteúdo digital entregues a clientes em múltiplos setores.',
    proj4Desc: 'Painel de analytics em tempo real com gráficos interativos e visualização de dados.',
    proj5Desc: 'Interface de chat inteligente com processamento de linguagem natural e aprendizado de máquina.',
    proj6Desc: 'Sem licença SPA/MF não pode operar de verdade no Brasil. Isso é só uma demonstração de skill em desenvolvimento web + lógica de jogos.',
    privateLinkMessage: 'O dono pediu para não divulgar',
  },
  visitors: {
    title: 'Visitantes',
    subtitle: 'Rastreamento de visitantes em tempo real ao redor do mundo',
    totalVisitors: 'Total de Visitantes',
    totalViews: 'Total de Visualizações',
    countries: 'Países',
    topCountry: 'Principal País',
    recentVisitors: 'Visitantes Recentes',
    liveTracking: 'Rastreamento ao vivo',
    localMode: 'Modo Local',
    loading: 'Carregando...',
    addTest: 'Adicionar Visitante de Teste',
    clear: 'Limpar',
    youAreHere: 'Você está aqui',
    trackingYou: 'Rastreando sua localização...',
    geoFallback: 'Localização aproximada (via navegador)',
    geoError: 'Não foi possível localizar — usando padrão',
    addTestHelp: 'Adiciona um visitante aleatório de uma cidade real',
    visits: 'visitas',
  },
  contact: {
    title: 'Entre em Contato',
    subtitle: 'Tem um projeto em mente ou quer colaborar? Adoraria ouvir de você. Vamos criar algo incrível juntos.',
    name: 'Nome',
    email: 'Email',
    subject: 'Assunto',
    message: 'Mensagem',
    send: 'Enviar Mensagem',
    sending: 'Enviando...',
    sent: 'Mensagem enviada com sucesso! Retornarei em breve.',
    failed: 'Falha ao enviar mensagem. Tente novamente.',
    openingClient: 'Abrindo seu cliente de email...',
    connectWithMe: 'Conecte-se Comigo',
    responseTime: 'Tempo de Resposta',
    responseTimeDesc: 'Normalmente respondo em 24-48 horas. Para assuntos urgentes, entre em contato por email.',
    available: 'Disponível para novos projetos',
    socials: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      twitter: 'Twitter',
    },
  },
  common: {
    unknown: 'Desconhecido',
  },
};

// ====== English (US) ======
const en = {
  nav: {
    home: 'Home', about: 'About', projects: 'Projects', visitors: 'Visitors',
    contact: 'Contact', language: 'Language',
  },
  home: {
    subtitle: 'CREATIVE DEVELOPER',
    tagline: 'Transforming ideas into interactive digital experiences with cutting-edge design and technology',
    cta: 'Explore My Work',
  },
  about: {
    title: 'About Me', whoIAm: 'Who I Am',
    bio1: "I'm a creative developer passionate about building beautiful and functional digital experiences. With a strong foundation in both design and development, I bridge the gap between aesthetics and functionality.",
    bio2: 'My journey in tech started with a curiosity about how things work, evolving into a career dedicated to creating meaningful digital products that users love.',
    quickFacts: 'Quick Facts', location: 'Location:', experience: 'Experience:',
    focus: 'Focus:', passion: 'Passion:', skillsTitle: 'Skills & Expertise',
    frontend: 'Frontend', backend: 'Backend', tools: 'Tools', experienceTitle: 'Experience',
    locationValue: 'Rio de Janeiro, Brazil', experienceValue: '10+ years',
    focusValue: 'Web Design, UI UX & Development', passionValue: 'Interactive Experiences',
    exp1Title: 'Freelance Web Designer & Digital Content Creator',
    exp1Company: 'Independent', exp1Period: '2019 – Present',
    exp1Desc1: 'Development, customization, maintenance, and optimization of websites for clients and personal projects.',
    exp1Desc2: 'Creation of digital assets, image editing, multimedia content, visual branding, and promotional materials using Photoshop and AI-assisted tools.',
    exp2Title: 'Various Professional Roles & Independent Projects',
    exp2Company: 'Independent', exp2Period: '2016 – 2019',
    exp2Desc1: 'Experience in multiple sectors including construction, manual labor, services, and independent digital projects.',
    exp2Desc2: 'Developed practical skills in teamwork, adaptability, resilience, customer relations, and problem-solving while simultaneously studying web development, programming, and digital design.',
    exp3Title: 'Military Service – Brazilian Air Force',
    exp3Company: 'Brazilian Air Force', exp3Period: '2010 – 2016',
    exp3Desc1: 'Military career focused on discipline, teamwork, operational planning, responsibility, and performance under pressure.',
  },
  projects: {
    title: 'Projects', subtitle: 'A selection of my recent work',
    viewProject: 'View Project', viewCode: 'View Code',
    testimonials: 'Client Testimonials', visitSite: 'Visit Site',
    test1Title: 'Highly capable and flexible',
    test1Text: "It's very easy to collaborate with Renan. He has great ideas and is extremely capable of handling urgent demands!",
    test2Title: 'A truly inspiring designer',
    test2Text: "Mr. Ananias's eye for design is incredible. He can highlight the beauty in simple things, a truly inspiring designer.",
    proj1Desc: 'Visual identity, custom website, and multimedia content for a gaming community project.',
    proj2Desc: 'Original novel combining dark romance and fantasy, with custom digital art for worldbuilding and cover design.',
    proj3Desc: 'A collection of website design, branding, and digital content projects delivered to clients across multiple industries.',
    proj4Desc: 'Real-time analytics dashboard with interactive charts and data visualization.',
    proj5Desc: 'Intelligent chat interface with natural language processing and machine learning.',
    proj6Desc: 'Without SPA/MF license it cannot operate for real in Brazil. This is just a demonstration of web development skill + game logic.',
    privateLinkMessage: 'The owner asked not to disclose',
  },
  visitors: {
    title: 'Visitors', subtitle: 'Real-time visitor tracking across the globe',
    totalVisitors: 'Total Visitors', totalViews: 'Total Views',
    countries: 'Countries', topCountry: 'Top Country', recentVisitors: 'Recent Visitors',
    liveTracking: 'Live tracking', localMode: 'Local Mode', loading: 'Loading...',
    addTest: 'Add Test Visitor', clear: 'Clear', youAreHere: 'You are here',
    trackingYou: 'Tracking your location...', geoFallback: 'Approximate location (via browser)',
    geoError: 'Could not locate — using default', addTestHelp: 'Adds a random visitor from a real city',
    visits: 'visits',
  },
  contact: {
    title: 'Get In Touch',
    subtitle: "Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.",
    name: 'Name', email: 'Email', subject: 'Subject', message: 'Message',
    send: 'Send Message', sending: 'Sending...',
    sent: 'Message sent successfully! I will get back to you soon.',
    failed: 'Failed to send message. Please try again.',
    openingClient: 'Opening your email client...',
    connectWithMe: 'Connect With Me', responseTime: 'Response Time',
    responseTimeDesc: 'I typically respond to inquiries within 24-48 hours. For urgent matters, feel free to reach out via email.',
    available: 'Available for new projects',
    socials: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', twitter: 'Twitter' },
  },
  common: { unknown: 'Unknown' },
};

// ====== Español ======
const es = {
  nav: {
    home: 'Inicio', about: 'Sobre Mí', projects: 'Proyectos',
    visitors: 'Visitantes', contact: 'Contacto', language: 'Idioma',
  },
  home: {
    subtitle: 'DESARROLLADOR CREATIVO',
    tagline: 'Transformando ideas en experiencias digitales interactivas con diseño y tecnología de vanguardia',
    cta: 'Explora Mi Trabajo',
  },
  about: {
    title: 'Sobre Mí', whoIAm: 'Quién Soy',
    bio1: 'Soy un desarrollador creativo apasionado por construir experiencias digitales hermosas y funcionales. Con una base sólida tanto en diseño como en desarrollo, uno lo estético y lo funcional.',
    bio2: 'Mi camino en la tecnología comenzó con la curiosidad de entender cómo funcionan las cosas, evolucionando hacia una carrera dedicada a crear productos digitales significativos que los usuarios amen.',
    quickFacts: 'Datos Rápidos', location: 'Ubicación:', experience: 'Experiencia:',
    focus: 'Enfoque:', passion: 'Pasión:', skillsTitle: 'Habilidades y Experiencia',
    frontend: 'Frontend', backend: 'Backend', tools: 'Herramientas', experienceTitle: 'Experiencia',
    locationValue: 'Río de Janeiro, Brasil', experienceValue: '10+ años',
    focusValue: 'Diseño Web, UI UX y Desarrollo', passionValue: 'Experiencias Interactivas',
    exp1Title: 'Diseñador Web Freelance y Creador de Contenido Digital',
    exp1Company: 'Independiente', exp1Period: '2019 – Presente',
    exp1Desc1: 'Desarrollo, personalización, mantenimiento y optimización de sitios web para clientes y proyectos personales.',
    exp1Desc2: 'Creación de activos digitales, edición de imágenes, contenido multimedia, marca visual y materiales promocionales con Photoshop y herramientas de IA.',
    exp2Title: 'Diversos Roles Profesionales y Proyectos Independientes',
    exp2Company: 'Independiente', exp2Period: '2016 – 2019',
    exp2Desc1: 'Experiencia en múltiples sectores incluyendo construcción, trabajo manual, servicios y proyectos digitales independientes.',
    exp2Desc2: 'Desarrolló habilidades prácticas en trabajo en equipo, adaptabilidad, resiliencia, atención al cliente y resolución de problemas mientras estudiaba desarrollo web, programación y diseño digital.',
    exp3Title: 'Servicio Militar – Fuerza Aérea Brasileña',
    exp3Company: 'Fuerza Aérea Brasileña', exp3Period: '2010 – 2016',
    exp3Desc1: 'Carrera militar enfocada en disciplina, trabajo en equipo, planificación operativa, responsabilidad y desempeño bajo presión.',
  },
  projects: {
    title: 'Proyectos', subtitle: 'Una selección de mis trabajos recientes',
    viewProject: 'Ver Proyecto', viewCode: 'Ver Código',
    testimonials: 'Testimonios de Clientes', visitSite: 'Visitar Sitio',
    test1Title: 'Altamente capaz y flexible',
    test1Text: 'Es muy fácil colaborar con Renan. ¡Tiene grandes ideas y es extremadamente capaz de atender demandas urgentes!',
    test2Title: 'Un diseñador verdaderamente inspirador',
    test2Text: 'El ojo del Sr. Ananias para el diseño es increíble. Puede resaltar la belleza en cosas simples, un diseñador verdaderamente inspirador.',
    proj1Desc: 'Identidad visual, sitio personalizado y contenido multimedia para un proyecto de comunidad gamer.',
    proj2Desc: 'Novela original que combina dark romance y fantasía, con arte digital personalizado para construcción de mundo y portada.',
    proj3Desc: 'Una colección de proyectos de diseño de sitios, branding y contenido digital entregados a clientes en múltiples sectores.',
    proj4Desc: 'Panel de analytics en tiempo real con gráficos interactivos y visualización de datos.',
    proj5Desc: 'Interfaz de chat inteligente con procesamiento de lenguaje natural y aprendizaje automático.',
    proj6Desc: 'Sin licencia SPA/MF no puede operar realmente en Brasil. Esto es solo una demostración de habilidad en desarrollo web + lógica de juegos.',
    privateLinkMessage: 'El propietario pidió no divulgar',
  },
  visitors: {
    title: 'Visitantes', subtitle: 'Seguimiento de visitantes en tiempo real alrededor del mundo',
    totalVisitors: 'Total de Visitantes', totalViews: 'Total de Visualizaciones',
    countries: 'Países', topCountry: 'País Principal', recentVisitors: 'Visitantes Recientes',
    liveTracking: 'Seguimiento en vivo', localMode: 'Modo Local', loading: 'Cargando...',
    addTest: 'Añadir Visitante de Prueba', clear: 'Limpiar', youAreHere: 'Estás aquí',
    trackingYou: 'Rastreando tu ubicación...', geoFallback: 'Ubicación aproximada (vía navegador)',
    geoError: 'No se pudo ubicar — usando predeterminado',
    addTestHelp: 'Añade un visitante aleatorio de una ciudad real', visits: 'visitas',
  },
  contact: {
    title: 'Ponte en Contacto',
    subtitle: '¿Tienes un proyecto en mente o quieres colaborar? Me encantaría saber de ti. Creemos algo increíble juntos.',
    name: 'Nombre', email: 'Email', subject: 'Asunto', message: 'Mensaje',
    send: 'Enviar Mensaje', sending: 'Enviando...',
    sent: '¡Mensaje enviado con éxito! Te responderé pronto.',
    failed: 'Error al enviar el mensaje. Inténtalo de nuevo.',
    openingClient: 'Abriendo tu cliente de email...',
    connectWithMe: 'Conéctate Conmigo', responseTime: 'Tiempo de Respuesta',
    responseTimeDesc: 'Normalmente respondo en un plazo de 24-48 horas. Para temas urgentes, no dudes en contactarme por email.',
    available: 'Disponible para nuevos proyectos',
    socials: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', twitter: 'Twitter' },
  },
  common: { unknown: 'Desconocido' },
};

// ====== 中文 (简体) ======
const zhCN = {
  nav: {
    home: '首页', about: '关于', projects: '项目', visitors: '访客',
    contact: '联系', language: '语言',
  },
  home: {
    subtitle: '创意开发者',
    tagline: '以前沿的设计与技术,将创意转化为互动的数字体验',
    cta: '探索我的作品',
  },
  about: {
    title: '关于我', whoIAm: '我是谁',
    bio1: '我是一名富有创意的开发者,热衷于打造美观且实用的数字体验。凭借在设计与开发方面的扎实基础,我将美学与功能完美结合。',
    bio2: '我的技术之路始于对事物运作方式的好奇,最终发展为致力于创造用户喜爱的有意义的数字产品。',
    quickFacts: '快速了解', location: '位置:', experience: '经验:',
    focus: '专注:', passion: '热情:', skillsTitle: '技能与专长',
    frontend: '前端', backend: '后端', tools: '工具', experienceTitle: '经验',
    locationValue: '里约热内卢, 巴西', experienceValue: '10+ 年',
    focusValue: '网页设计、UI/UX 与开发', passionValue: '互动体验',
    exp1Title: '自由职业网页设计师与数字内容创作者',
    exp1Company: '独立', exp1Period: '2019 – 至今',
    exp1Desc1: '为客户和个人项目开发、定制、维护和优化网站。',
    exp1Desc2: '使用 Photoshop 和 AI 辅助工具创建数字资产、图像编辑、多媒体内容、视觉品牌和宣传材料。',
    exp2Title: '多种职业角色与独立项目',
    exp2Company: '独立', exp2Period: '2016 – 2019',
    exp2Desc1: '在建筑、劳动力、服务和独立数字项目等多个领域拥有经验。',
    exp2Desc2: '在同时学习网页开发、编程和数字设计的过程中,培养了团队合作、适应能力、韧性、客户关系和解决问题的实践技能。',
    exp3Title: '兵役 – 巴西空军',
    exp3Company: '巴西空军', exp3Period: '2010 – 2016',
    exp3Desc1: '军事生涯专注于纪律、团队合作、作战规划、责任感和压力下的表现。',
  },
  projects: {
    title: '项目', subtitle: '我近期作品的精选',
    viewProject: '查看项目', viewCode: '查看代码',
    testimonials: '客户评价', visitSite: '访问网站',
    test1Title: '能力强且灵活',
    test1Text: '与 Renan 合作非常容易。他有很棒的点子,而且非常有能力处理紧急需求!',
    test2Title: '真正鼓舞人心的设计师',
    test2Text: 'Ananias 先生的审美眼光令人惊叹。他能在简单的事物中发掘美,是一位真正鼓舞人心的设计师。',
    proj1Desc: '为游戏社区项目提供视觉识别、定制网站和多媒体内容。',
    proj2Desc: '原创小说,融合黑暗浪漫与奇幻,附带世界构建和封面的定制数字艺术。',
    proj3Desc: '为多个行业的客户提供的网站设计、品牌塑造和数字内容项目集合。',
    proj4Desc: '实时分析仪表盘,配备交互式图表和数据可视化。',
    proj5Desc: '智能聊天界面,具备自然语言处理和机器学习能力。',
    proj6Desc: '没有SPA/MF许可证,无法在巴西真正运营。这仅是网页开发技能+游戏逻辑的演示。',
    privateLinkMessage: '业主要求不公开',
  },
  visitors: {
    title: '访客', subtitle: '全球访客实时追踪',
    totalVisitors: '总访客数', totalViews: '总浏览量',
    countries: '国家数', topCountry: '主要国家', recentVisitors: '最近访客',
    liveTracking: '实时追踪', localMode: '本地模式', loading: '加载中...',
    addTest: '添加测试访客', clear: '清除', youAreHere: '你在这里',
    trackingYou: '正在定位你的位置...', geoFallback: '大致位置(通过浏览器)',
    geoError: '无法定位 — 使用默认', addTestHelp: '从真实城市中随机添加一名访客',
    visits: '次访问',
  },
  contact: {
    title: '联系我',
    subtitle: '有项目想合作或想交流?我很乐意听取您的想法。让我们一起创造精彩的作品。',
    name: '姓名', email: '邮箱', subject: '主题', message: '留言',
    send: '发送消息', sending: '发送中...',
    sent: '消息已成功发送!我会尽快回复您。',
    failed: '消息发送失败,请重试。',
    openingClient: '正在打开您的邮件客户端...',
    connectWithMe: '与我联系', responseTime: '回复时间',
    responseTimeDesc: '我通常在 24-48 小时内回复咨询。如有紧急事项,请随时通过邮件联系。',
    available: '可承接新项目',
    socials: { email: '邮箱', linkedin: 'LinkedIn', github: 'GitHub', twitter: 'Twitter' },
  },
  common: { unknown: '未知' },
};

// ====== 中文 (繁體) ======
const zhTW = {
  nav: {
    home: '首頁', about: '關於', projects: '專案', visitors: '訪客',
    contact: '聯絡', language: '語言',
  },
  home: {
    subtitle: '創意開發者',
    tagline: '以前沿的設計與技術,將創意轉化為互動的數位體驗',
    cta: '探索我的作品',
  },
  about: {
    title: '關於我', whoIAm: '我是誰',
    bio1: '我是一名富有創意的開發者,熱衷於打造美觀且實用的數位體驗。憑藉在設計與開發方面的扎實基礎,我將美學與功能完美結合。',
    bio2: '我的技術之路始於對事物運作方式的好奇,最終發展為致力於創造使用者喜愛的有意義的數位產品。',
    quickFacts: '快速瞭解', location: '位置:', experience: '經驗:',
    focus: '專注:', passion: '熱情:', skillsTitle: '技能與專長',
    frontend: '前端', backend: '後端', tools: '工具', experienceTitle: '經驗',
    locationValue: '里約熱內盧, 巴西', experienceValue: '10+ 年',
    focusValue: '網頁設計、UI/UX 與開發', passionValue: '互動體驗',
    exp1Title: '自由接案網頁設計師與數位內容創作者',
    exp1Company: '獨立', exp1Period: '2019 – 至今',
    exp1Desc1: '為客戶和個人專案開發、客製、維護和最佳化網站。',
    exp1Desc2: '使用 Photoshop 和 AI 輔助工具建立數位素材、影像編輯、多媒體內容、視覺品牌和宣傳材料。',
    exp2Title: '多種職業角色與獨立專案',
    exp2Company: '獨立', exp2Period: '2016 – 2019',
    exp2Desc1: '在建築、勞動、服務和獨立數位專案等多個領域擁有經驗。',
    exp2Desc2: '在同時學習網頁開發、程式設計和數位設計的過程中,培養了團隊合作、適應能力、韌性、客戶關係和解決問題的實務技能。',
    exp3Title: '兵役 – 巴西空軍',
    exp3Company: '巴西空軍', exp3Period: '2010 – 2016',
    exp3Desc1: '軍旅生涯專注於紀律、團隊合作、作戰規劃、責任感及壓力下的表現。',
  },
  projects: {
    title: '專案', subtitle: '我近期作品的精選',
    viewProject: '查看專案', viewCode: '查看程式碼',
    testimonials: '客戶評價', visitSite: '造訪網站',
    test1Title: '能力出眾且靈活',
    test1Text: '與 Renan 合作非常容易。他有很棒的想法,而且非常有能力處理緊急需求!',
    test2Title: '真正激勵人心的設計師',
    test2Text: 'Ananias 先生對設計的眼光令人驚嘆。他能在簡單的事物中發掘美,是一位真正激勵人心的設計師。',
    proj1Desc: '為遊戲社群專案提供視覺識別、客製網站和多媒體內容。',
    proj2Desc: '原創小說,融合黑暗浪漫與奇幻,附帶世界觀建構和封面的客製數位藝術。',
    proj3Desc: '為多個行業的客戶提供的網站設計、品牌塑造和數位內容專案集合。',
    proj4Desc: '即時分析儀表板,配備互動式圖表和資料視覺化。',
    proj5Desc: '智慧聊天介面,具備自然語言處理和機器學習能力。',
    proj6Desc: '沒有SPA/MF許可證,無法在巴西真正運營。這僅是網頁開發技能+遊戲邏輯的演示。',
    privateLinkMessage: '業主要求不公開',
  },
  visitors: {
    title: '訪客', subtitle: '全球訪客即時追蹤',
    totalVisitors: '總訪客數', totalViews: '總瀏覽量',
    countries: '國家數', topCountry: '主要國家', recentVisitors: '最近訪客',
    liveTracking: '即時追蹤', localMode: '本機模式', loading: '載入中...',
    addTest: '新增測試訪客', clear: '清除', youAreHere: '你在這裡',
    trackingYou: '正在定位你的位置...', geoFallback: '大致位置(透過瀏覽器)',
    geoError: '無法定位 — 使用預設', addTestHelp: '從真實城市中隨機新增一名訪客',
    visits: '次造訪',
  },
  contact: {
    title: '聯絡我',
    subtitle: '有專案想合作或想交流?我很樂意聽取您的想法。讓我們一起創造精彩的作品。',
    name: '姓名', email: '電子郵件', subject: '主題', message: '訊息',
    send: '傳送訊息', sending: '傳送中...',
    sent: '訊息已成功傳送!我會盡快回覆您。',
    failed: '訊息傳送失敗,請重試。',
    openingClient: '正在開啟您的郵件用戶端...',
    connectWithMe: '與我聯繫', responseTime: '回覆時間',
    responseTimeDesc: '我通常在 24-48 小時內回覆諮詢。如有緊急事項,請隨時透過電子郵件聯絡。',
    available: '可承接新專案',
    socials: { email: '電子郵件', linkedin: 'LinkedIn', github: 'GitHub', twitter: 'Twitter' },
  },
  common: { unknown: '未知' },
};

// ====== 日本語 ======
const ja = {
  nav: {
    home: 'ホーム', about: 'について', projects: 'プロジェクト',
    visitors: '訪問者', contact: 'お問い合わせ', language: '言語',
  },
  home: {
    subtitle: 'クリエイティブ開発者',
    tagline: '最先端のデザインとテクノロジーで、アイデアをインタラクティブなデジタル体験に変える',
    cta: '作品を見る',
  },
  about: {
    title: '自己紹介', whoIAm: '私について',
    bio1: '美しく機能的なデジタル体験の構築に情熱を持つクリエイティブ開発者です。デザインと開発の両方に強い基盤を持ち、美学と機能性の橋渡しをします。',
    bio2: 'テクノロジーの旅は、ものが動く仕組みへの好奇心から始まり、ユーザーが愛する意味のあるデジタル製品を作るキャリアへと進化しました。',
    quickFacts: 'クイック情報', location: '所在地:', experience: '経験:',
    focus: 'フォーカス:', passion: '情熱:', skillsTitle: 'スキル & 専門知識',
    frontend: 'フロントエンド', backend: 'バックエンド', tools: 'ツール', experienceTitle: '経験',
    locationValue: 'リオデジャネイロ, ブラジル', experienceValue: '10+ 年',
    focusValue: 'ウェブデザイン、UI/UX & 開発', passionValue: 'インタラクティブ体験',
    exp1Title: 'フリーランスのウェブデザイナー & デジタルコンテンツ制作者',
    exp1Company: '独立', exp1Period: '2019 – 現在',
    exp1Desc1: 'クライアントと個人プロジェクトのウェブサイト開発、カスタマイズ、保守、最適化。',
    exp1Desc2: 'Photoshop と AI 支援ツールを使用したデジタルアセットの作成、画像編集、マルチメディアコンテンツ、ビジュアルブランディング、販促資料の作成。',
    exp2Title: '多様な職業と独立プロジェクト',
    exp2Company: '独立', exp2Period: '2016 – 2019',
    exp2Desc1: '建設、肉体労働、サービス、独立系デジタルプロジェクトなど複数のセクターでの経験。',
    exp2Desc2: 'ウェブ開発、プログラミング、デジタルデザインを並行して学びながら、チームワーク、適応力、レジリエンス、顧客対応、問題解決の実務スキルを培った。',
    exp3Title: '兵役 – ブラジル空軍',
    exp3Company: 'ブラジル空軍', exp3Period: '2010 – 2016',
    exp3Desc1: '規律、チームワーク、作戦立案、責任感、プレッシャー下でのパフォーマンスに焦点を当てた軍事的キャリア。',
  },
  projects: {
    title: 'プロジェクト', subtitle: '最近の作品のセレクション',
    viewProject: 'プロジェクトを見る', viewCode: 'コードを見る',
    testimonials: 'クライアントの声', visitSite: 'サイトを見る',
    test1Title: '非常に有能で柔軟',
    test1Text: 'Renan とのコラボレーションはとても簡単です。彼は素晴らしいアイデアを持ち、急な要望にも柔軟に対応できます!',
    test2Title: '真にインスピレーションを与えるデザイナー',
    test2Text: 'アナニアス氏のデザインに対する目は素晴らしいです。シンプルなものから美しさを引き出すことができる、真にインスピレーションを与えるデザイナーです。',
    proj1Desc: 'ゲームコミュニティプロジェクト向けのビジュアルアイデンティティ、カスタムウェブサイト、マルチメディアコンテンツ。',
    proj2Desc: 'ダークロマンスとファンタジーを融合したオリジナル小説。ワールドビルディングとカバー用のカスタムデジタルアート付き。',
    proj3Desc: '複数の業界のクライアントに提供したウェブサイトデザイン、ブランディング、デジタルコンテンツプロジェクトのコレクション。',
    proj4Desc: 'インタラクティブなチャートとデータ可視化を備えたリアルタイム分析ダッシュボード。',
    proj5Desc: '自然言語処理と機械学習を備えたインテリジェントなチャットインターフェース。',
    proj6Desc: 'SPA/MFライセンスなしではブラジルで実際に運営できません。これはウェブ開発スキル＋ゲームロジックのデモンストレーションです。',
    privateLinkMessage: 'オーナー非公開希望',
  },
  visitors: {
    title: '訪問者', subtitle: '世界中の訪問者をリアルタイムで追跡',
    totalVisitors: '総訪問者数', totalViews: '総閲覧数',
    countries: '国数', topCountry: '主要国', recentVisitors: '最近の訪問者',
    liveTracking: 'ライブ追跡', localMode: 'ローカルモード', loading: '読み込み中...',
    addTest: 'テスト訪問者を追加', clear: 'クリア', youAreHere: '現在地',
    trackingYou: '現在地を追跡中...', geoFallback: 'おおよその位置(ブラウザ経由)',
    geoError: '位置を特定できません — デフォルトを使用',
    addTestHelp: '実際の都市からランダムに訪問者を追加', visits: '回訪問',
  },
  contact: {
    title: 'お問い合わせ',
    subtitle: 'プロジェクトのアイデアやコラボレーションをお考えですか?ぜひお聞かせください。一緒に素晴らしいものを作りましょう。',
    name: 'お名前', email: 'メール', subject: '件名', message: 'メッセージ',
    send: 'メッセージを送信', sending: '送信中...',
    sent: 'メッセージが送信されました!すぐにご連絡いたします。',
    failed: 'メッセージの送信に失敗しました。もう一度お試しください。',
    openingClient: 'メールクライアントを開いています...',
    connectWithMe: 'つながる', responseTime: '返信時間',
    responseTimeDesc: '通常24〜48時間以内にお返事します。お急ぎの場合はメールでご連絡ください。',
    available: '新規プロジェクト受付中',
    socials: { email: 'メール', linkedin: 'LinkedIn', github: 'GitHub', twitter: 'Twitter' },
  },
  common: { unknown: '不明' },
};

const dictionaries = {
  'pt-br': ptBR,
  en,
  es,
  'zh-cn': zhCN,
  'zh-tw': zhTW,
  ja,
};

/**
 * Mescla recursivamente um dicionário parcial sobre a base (pt-br).
 * Garante que toda chave tenha um valor, mesmo que não traduzida.
 */
function deepMerge(base, override) {
  if (typeof base !== 'object' || base === null || Array.isArray(base)) {
    return override ?? base;
  }
  const result = { ...base };
  for (const key of Object.keys(override ?? {})) {
    const baseVal = base[key];
    const overVal = override[key];
    if (
      baseVal && typeof baseVal === 'object' && !Array.isArray(baseVal) &&
      overVal && typeof overVal === 'object' && !Array.isArray(overVal)
    ) {
      result[key] = deepMerge(baseVal, overVal);
    } else if (overVal !== undefined) {
      result[key] = overVal;
    }
  }
  return result;
}

function getDictionary(lang) {
  return deepMerge(ptBR, dictionaries[lang] || {});
}

function detectInitialLanguage() {
  if (typeof window === 'undefined') return 'pt-br';
  const stored = localStorage.getItem('portfolio-lang');
  if (stored && stored in dictionaries) return stored;

  const browser = navigator.language?.toLowerCase() || 'pt-br';
  if (browser.startsWith('pt')) return 'pt-br';
  if (browser.startsWith('en')) return 'en';
  if (browser.startsWith('es')) return 'es';
  if (browser === 'zh-cn' || browser === 'zh-hans' || browser === 'zh-sg') return 'zh-cn';
  if (browser === 'zh-tw' || browser === 'zh-hk' || browser === 'zh-mo' || browser === 'zh-hant') return 'zh-tw';
  if (browser.startsWith('ja')) return 'ja';
  return 'pt-br';
}

/* ========== js/contexts/LanguageContext.js ========== */
/**
 * LanguageContext.js — Contexto de idioma (pt-br, en, es, zh-cn, zh-tw, ja)
 *
 * Equivalente ao LanguageContext.tsx do projeto original,
 * sem dependências de tRPC ou TypeScript.
 */
// import { createContext, useContext, useEffect, useState } from 'react';
// import { getDictionary, detectInitialLanguage } from '../i18n/dictionaries.js';

const STORAGE_KEY = 'portfolio-lang';

const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(detectInitialLanguage);
  const [t, setT] = useState(() => getDictionary(detectInitialLanguage()));

  useEffect(() => {
    setT(getDictionary(language));
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage indisponível (modo privado) — silencioso
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage deve ser usado dentro de <LanguageProvider>');
  }
  return ctx;
}

/* ========== js/contexts/ThemeContext.js ========== */
/**
 * ThemeContext.js — Contexto de tema (light/dark)
 *
 * Equivalente ao ThemeContext.tsx do projeto original.
 * Sempre força dark mode (tema neon cyber), mas mantém a estrutura
 * para permitir alternância futura.
 */
// import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(undefined);

function ThemeProvider({ children, defaultTheme = 'dark', switchable = false }) {
  const [theme, setTheme] = useState(() => {
    if (switchable) {
      const stored = localStorage.getItem('theme');
      return stored || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    if (switchable) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, switchable]);

  const toggleTheme = switchable
    ? () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

/* ========== js/hooks/useMobile.js ========== */
/**
 * useMobile.js — Hook para detectar viewport mobile
 *
 * Equivalente ao useMobile.tsx do projeto original.
 */
// import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
}

/* ========== js/components/Icons.js ========== */
/**
 * Icons.js — Ícones SVG inline (substitui lucide-react)
 *
 * Cada ícone é um componente React que renderiza um SVG.
 * Mantém a mesma API do lucide-react (aceita className, size, etc.)
 *
 * Para adicionar novos ícones, basta copiar mais SVGs do Feather Icons
 * (https://feathericons.com/) e seguir o mesmo padrão.
 */

function makeIcon(children) {
  return function Icon({ size = 24, className = '', strokeWidth = 2, ...rest }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={{ flexShrink: 0 }}
        {...rest}
      >
        {children}
      </svg>
    );
  };
}

const Menu = makeIcon(
  <>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </>
);

const X = makeIcon(
  <>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </>
);

const Globe = makeIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </>
);

const Check = makeIcon(<polyline points="20 6 9 17 4 12" />);

const ChevronDown = makeIcon(<polyline points="6 9 12 15 18 9" />);

const Mail = makeIcon(
  <>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </>
);

const Linkedin = makeIcon(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </>
);

const Github = makeIcon(
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
);

const Twitter = makeIcon(
  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
);

const Send = makeIcon(
  <>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </>
);

const ExternalLink = makeIcon(
  <>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </>
);

const Star = makeIcon(
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
);

const AlertTriangle = makeIcon(
  <>
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </>
);

const RotateCcw = makeIcon(
  <>
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </>
);

/* ========== js/components/tech-icons/TechIcon.js ========== */
/**
 * TechIcon.js — Ícones SVG oficiais por tecnologia (SimpleIcons)
 *
 * Equivalente ao TechIcon.tsx do projeto original, sem dependências npm.
 * Os SVGs vêm do Simple Icons (https://simpleicons.org/) e estão embutidos.
 */

const wrap = (children, color, viewBox = '0 0 24 24') =>
  function Icon({ size = 16, className = '' }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill={color}
        className={className}
        style={{ flexShrink: 0 }}
      >
        {children}
      </svg>
    );
  };

const ReactIcon = wrap(<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.79-4.888 2.143-1.78-1.354-3.542-2.144-4.887-2.144-1.727 0-2.585 1.045-2.585 2.747 0 1.317.55 2.69 1.232 4.118C3.95 9.063 2.99 10.36 2.99 11.782c0 1.423.96 2.72 2.76 3.793-.682 1.428-1.232 2.802-1.232 4.118 0 1.702.858 2.747 2.585 2.747 1.345 0 3.106-.79 4.887-2.144 1.78 1.354 3.542 2.144 4.888 2.144 1.727 0 2.585-1.045 2.585-2.747 0-1.317-.55-2.69-1.232-4.118 1.8-1.073 2.76-2.37 2.76-3.793 0-1.423-.96-2.72-2.76-3.793.682-1.428 1.232-2.802 1.232-4.118 0-1.702-.858-2.747-2.585-2.747zm-.65 3.107c.948 0 1.72.768 1.72 1.72 0 .948-.768 1.72-1.72 1.72-.948 0-1.72-.768-1.72-1.72 0-.948.768-1.72 1.72-1.72zM12 4.27c1.346 0 2.585 1.045 2.585 2.747 0 .9-.275 1.85-.687 2.747H10.1c-.412-.897-.687-1.847-.687-2.747 0-1.702 1.24-2.747 2.585-2.747zM6.78 6.142c.948 0 1.72.768 1.72 1.72 0 .948-.768 1.72-1.72 1.72-.948 0-1.72-.768-1.72-1.72 0-.948.768-1.72 1.72-1.72zm0 11.716c-.948 0-1.72-.768-1.72-1.72 0-.948.768-1.72 1.72-1.72.948 0 1.72.768 1.72 1.72 0 .948-.768 1.72-1.72 1.72zM12 19.73c-1.346 0-2.585-1.045-2.585-2.747 0-.9.275-1.85.687-2.747h3.796c.412.897.687 1.847.687 2.747 0 1.702-1.24 2.747-2.585 2.747zm5.22-1.872c-.948 0-1.72-.768-1.72-1.72 0-.948.768-1.72 1.72-1.72.948 0 1.72.768 1.72 1.72 0 .948-.768 1.72-1.72 1.72z" />, '#61DAFB');

const TypeScriptIcon = wrap(<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.372 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />, '#3178C6');

const TailwindIcon = wrap(<path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />, '#06B6D4');

const FramerIcon = wrap(<path d="M4 0h16v8h-8L4 0zm0 8h8l8 8h-8v8L4 16V8zm16 8h-8v8l8-8z" />, '#0055FF');

const NodeJSIcon = wrap(<path d="M11.998 1.77c-.15 0-.31.04-.46.12L3.62 6.61c-.31.17-.5.5-.5.86v9.05c0 .36.19.69.5.86l7.92 4.72c.15.09.31.13.46.13.15 0 .31-.04.45-.13l7.92-4.72c.31-.17.5-.5.5-.86V7.47c0-.36-.19-.69-.5-.86L12.44 1.89a.93.93 0 0 0-.45-.12zm-.01 1.66 6.77 4.04v8.07l-6.77 4.04-6.76-4.04V7.47l6.76-4.04zM9.3 13.4l.01.1v.55c-.01.1-.06.18-.14.21a.25.25 0 0 1-.12.03c-.08 0-.18-.03-.27-.08a1.5 1.5 0 0 1-.27-.2 2.06 2.06 0 0 1-.51-.74 1.07 1.07 0 0 1-.07-.4c0-.15.04-.27.13-.37.09-.1.21-.16.36-.16.12 0 .22.04.3.11.08.07.12.16.13.27 0 .04 0 .08-.01.12a.55.55 0 0 0-.01.08c0 .08.04.18.11.31.07.12.16.23.27.32.1.09.2.15.27.18.07.02.13.04.18.04.04 0 .07-.01.1-.04.04-.04.07-.1.07-.18v-.55c0-.07.03-.13.08-.18.05-.04.12-.07.2-.07.07 0 .13.03.18.07.05.05.07.11.07.18zm2.16-1.16c.11 0 .2.04.27.13.07.08.1.19.1.32v1.31c0 .13-.03.24-.1.32-.07.08-.16.13-.27.13-.1 0-.19-.05-.26-.13a.49.49 0 0 1-.1-.32v-1.31c0-.13.03-.24.1-.32.07-.09.16-.13.26-.13zm.94 0c.1 0 .2.04.27.13.07.08.1.19.1.32v1.31c0 .13-.03.24-.1.32-.07.08-.16.13-.27.13a.34.34 0 0 1-.27-.13.49.49 0 0 1-.1-.32v-1.31c0-.13.04-.24.1-.32.08-.09.17-.13.27-.13zm2.85.06c.1 0 .18.04.25.11.07.07.1.16.1.27v.04a.4.4 0 0 1-.1.27.34.34 0 0 1-.25.1h-.66v.3h.66c.1 0 .18.04.25.11.07.07.1.16.1.27 0 .11-.03.2-.1.27a.34.34 0 0 1-.25.11h-.66v.42c0 .11-.04.2-.11.27a.36.36 0 0 1-.27.11c-.1 0-.19-.04-.26-.11a.39.39 0 0 1-.1-.27v-1.51c0-.11.04-.2.1-.27a.37.37 0 0 1 .27-.11h.98z" />, '#5FA04E');

const ExpressIcon = wrap(<path d="M9.297 13.412H7.55l-.022-.043-1.81-3.515-1.81 3.515H2.16L4.5 9.594 2.043 5.84h1.91l1.726 3.515L7.527 5.84h1.872L6.96 9.625l2.337 3.787zM24 12.412c0 1.092-.39 1.953-1.17 2.582-.78.63-1.802.945-3.066.945-.9 0-1.706-.198-2.418-.594a4.21 4.21 0 0 1-1.602-1.62l1.638-.99c.222.36.51.65.864.864a2.34 2.34 0 0 0 1.224.324c.276 0 .522-.024.738-.072.216-.048.402-.126.558-.234a1.16 1.16 0 0 0 .366-.396c.09-.156.135-.342.135-.558 0-.18-.036-.336-.108-.468a1.05 1.05 0 0 0-.306-.342 2.1 2.1 0 0 0-.468-.252 4.66 4.66 0 0 0-.594-.18 14.8 14.8 0 0 1-.738-.198 7.32 7.32 0 0 1-.9-.324 2.86 2.86 0 0 1-.738-.486 2.13 2.13 0 0 1-.504-.738c-.12-.288-.18-.636-.18-1.044 0-.612.18-1.146.54-1.602.36-.456.852-.804 1.476-1.044.624-.24 1.32-.36 2.088-.36.876 0 1.638.18 2.286.54.648.36 1.146.876 1.494 1.548l-1.62.972a1.97 1.97 0 0 0-.702-.756 1.83 1.83 0 0 0-1.044-.306c-.336 0-.624.042-.864.126-.24.084-.426.198-.558.342a.78.78 0 0 0-.198.522c0 .204.054.366.162.486.108.12.252.222.432.306.18.084.378.15.594.198.216.048.432.09.648.126.336.06.66.144.972.252.312.108.594.264.846.468.252.204.456.462.612.774.156.312.234.702.234 1.17z" />, '#FFFFFF');

const TRPCIcon = wrap(<path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.92 0c0-5.57-4.51-10.08-10.08-10.08S1.92 6.43 1.92 12 6.43 22.08 12 22.08 22.08 17.57 22.08 12ZM9.6 7.2v9.6h3.2v-3.2h1.6l1.6 3.2h3.2l-1.6-3.2c1.77 0 3.2-1.43 3.2-3.2s-1.43-3.2-3.2-3.2H9.6Zm3.2 4v-1.6h3.2v1.6h-3.2Z" />, '#398CCB');

const MySQLIcon = wrap(<path d="M16.405 17.4c-.045-.27-.27-.36-.585-.45-.315-.09-.54-.135-.81-.315-.27-.18-.27-.45-.27-.81.045-.585.36-1.305.99-1.755.63-.45 1.395-.675 2.205-.585.27.045.45.135.63.27.18.135.27.27.27.45 0 .135-.045.27-.18.36-.135.09-.315.09-.45.09-.18 0-.45 0-.72-.09-.36-.09-.72-.045-.99.135-.18.18-.27.36-.27.63 0 .27.135.45.36.585.18.09.45.18.72.225.36.09.63.18.9.27.27.09.45.18.63.36.18.18.27.45.27.81 0 .63-.225 1.17-.72 1.62-.45.405-1.125.63-1.935.63-.45 0-.9-.09-1.305-.27-.36-.135-.63-.36-.81-.585a.46.46 0 0 1-.09-.36c.045-.18.18-.27.36-.27.135 0 .27.045.405.135.135.09.27.18.45.27.18.09.36.135.585.18.225.045.45.045.72.045.36 0 .72-.09.99-.27.27-.18.405-.45.405-.81 0-.18-.045-.36-.135-.45-.09-.09-.27-.18-.45-.27-.18-.09-.45-.135-.72-.225-.27-.09-.54-.18-.81-.27-.27-.09-.45-.18-.63-.36-.18-.18-.27-.45-.27-.81 0-.585.27-1.17.81-1.62.54-.45 1.215-.72 1.98-.72.27 0 .54.045.81.09.27.045.45.135.63.27.18.135.27.27.27.45 0 .135-.045.27-.18.36-.135.09-.27.135-.45.135-.18 0-.36 0-.585-.045-.225-.045-.45-.045-.72-.045-.27 0-.54.09-.81.225-.225.135-.36.36-.36.63 0 .27.09.45.27.585.18.135.45.225.72.27.27.045.54.135.81.225.27.09.54.18.81.27.27.09.45.225.63.36.18.135.27.36.27.63 0 .765-.27 1.395-.81 1.845-.54.45-1.305.675-2.205.675-.36 0-.72-.045-1.035-.135zm-7.515-6.93v9.225c0 .27-.045.45-.135.585-.09.135-.27.18-.45.18-.18 0-.36-.045-.45-.18-.09-.135-.135-.315-.135-.585V10.47H6.045c-.27 0-.45-.045-.585-.135-.135-.09-.18-.27-.18-.45 0-.18.045-.315.18-.45.135-.135.315-.18.585-.18h4.59c.27 0 .45.045.585.18.135.135.18.27.18.45 0 .18-.045.36-.18.45-.135.09-.315.135-.585.135H8.89z" />, '#00758F');

const FigmaIcon = wrap(<path d="M12 2H8.5a3.5 3.5 0 0 0 0 7H12V2zM12 9H8.5a3.5 3.5 0 0 0 0 7H12V9zM12 16H8.5a3.5 3.5 0 0 0 3.5 3.5V16zM15.5 5.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM19 2h-3.5v7H19a3.5 3.5 0 0 0 0-7z" />, '#F24E1E');

const GitIcon = wrap(<path d="M23.546 10.93 13.067.452a1.553 1.553 0 0 0-2.193 0L8.717 2.612l2.768 2.768a1.838 1.838 0 0 1 2.333 2.336l2.673 2.673a1.838 1.838 0 1 1-1.103 1.084l-2.494-2.494v6.554a1.838 1.838 0 1 1-1.331-.034V9.604a1.838 1.838 0 0 1-.998-2.41L7.83 4.577 1.04 11.367a1.553 1.553 0 0 0 0 2.193l10.48 10.48a1.553 1.553 0 0 0 2.193 0L23.547 13.12a1.55 1.55 0 0 0 0-2.192z" />, '#F05033');

const ViteIcon = wrap(<path d="M14.475 1.078 23.41 5.039a.455.455 0 0 1 .205.638l-9.642 17.503a.46.46 0 0 1-.696.149L8.563 19.106a.456.456 0 0 1-.061-.612L13.06 12.84a.342.342 0 0 0-.078-.49l-.842-.624a.342.342 0 0 0-.527.142L6.4 21.42a.456.456 0 0 1-.71.13L.404 15.788a.456.456 0 0 1-.013-.654L12.197 1.555a.456.456 0 0 1 .55-.085l1.728 1.025a.683.683 0 0 1 .354.601c0 .378-.305.685-.683.685a.682.682 0 0 1-.425-.148l-1.701-1.06a.342.342 0 0 0-.422.04L2.064 15.667a.228.228 0 0 0 .014.32l4.243 3.96a.228.228 0 0 0 .357-.06l4.42-7.32a.456.456 0 0 1 .707-.124l1.27 1.087a.456.456 0 0 0 .683-.567L8.27 6.585a.342.342 0 0 1 .351-.498l1.59.165a1.252 1.252 0 0 0 1.255-1.711.796.796 0 0 0-.398-.474L8.541 2.7a.456.456 0 0 1-.2-.617L9.81.123a.456.456 0 0 1 .557-.182l4.108 1.137z" />, '#646CFF');

const DockerIcon = wrap(<path d="M13.983 11.078h2.119a.18.18 0 0 0 .18-.18V6.105a.18.18 0 0 0-.18-.18h-2.119a.18.18 0 0 0-.18.18v4.793c0 .099.081.18.18.18zM22.951 9.748a3.34 3.34 0 0 0-3.314-2.731 3.43 3.43 0 0 0-1.187.215 4.92 4.92 0 0 0-1.564-.802V.001l-3.711.001a.18.18 0 0 0-.18.18v6.49a4.473 4.473 0 0 0-1.55-.281 4.51 4.51 0 0 0-3.319 1.46 4.51 4.51 0 0 0-3.319-1.46 4.473 4.473 0 0 0-1.55.281V.181A.18.18 0 0 0 2.797.001L0 0v11.86a4.503 4.503 0 0 0 1.55 3.461 4.5 4.5 0 0 0 3.319 1.46 4.51 4.51 0 0 0 3.319-1.46 4.51 4.51 0 0 0 3.319 1.46 4.51 4.51 0 0 0 3.319-1.46 4.5 4.5 0 0 0 1.55-3.461h.001v-.453a3.46 3.46 0 0 0 3.573-1.2zM1.83 11.86a2.685 2.685 0 0 1 2.681-2.682 2.685 2.685 0 0 1 2.681 2.682 2.685 2.685 0 0 1-2.681 2.682A2.685 2.685 0 0 1 1.83 11.86zm7.5 0a2.685 2.685 0 0 1 2.681-2.682 2.685 2.685 0 0 1 2.681 2.682 2.685 2.685 0 0 1-2.681 2.682 2.685 2.685 0 0 1-2.681-2.682zm7.5 0a2.685 2.685 0 0 1 2.681-2.682 2.685 2.685 0 0 1 2.681 2.682 2.685 2.685 0 0 1-2.681 2.682 2.685 2.685 0 0 1-2.681-2.682z" />, '#2496ED');

const iconMap = {
  react: ReactIcon,
  typescript: TypeScriptIcon,
  tailwind: TailwindIcon,
  tailwindcss: TailwindIcon,
  'tailwind css': TailwindIcon,
  framer: FramerIcon,
  'framer motion': FramerIcon,
  node: NodeJSIcon,
  'node.js': NodeJSIcon,
  nodejs: NodeJSIcon,
  express: ExpressIcon,
  trpc: TRPCIcon,
  mysql: MySQLIcon,
  figma: FigmaIcon,
  git: GitIcon,
  vite: ViteIcon,
  docker: DockerIcon,
};

const FallbackIcon = ({ size = 16, className = '' }) => (
  <span
    className={`inline-block rounded-full bg-[#00ff88] ${className}`}
    style={{ width: size, height: size, flexShrink: 0 }}
  />
);

function TechIcon({ name, size = 16, className = '' }) {
  const key = name.toLowerCase().trim();
  const Icon = iconMap[key] || FallbackIcon;
  return <Icon size={size} className={className} />;
}

// export default TechIcon;

/* ========== js/components/ErrorBoundary.js ========== */
/**
 * ErrorBoundary.js — Error boundary do React
 *
 * Equivalente ao ErrorBoundary.tsx do projeto original, sem
 * dependência de shadcn/ui (AlertTriangle, RotateCcw vêm de Icons.js).
 *
 * Nota: `Component` vem do cabeçalho injetado por concatenar.py
 * (que desestrutura `const { Component, ... } = React;` no início do bundle).
 */
// import { AlertTriangle, RotateCcw } from './Icons.js';

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

// export default ErrorBoundary;

/* ========== js/components/LanguageSwitcher.js ========== */
/**
 * LanguageSwitcher.js — Dropdown para trocar idioma
 *
 * Equivalente ao LanguageSwitcher.tsx do projeto original.
 */
// import { useState, useRef, useEffect } from 'react';
// import { Globe, Check, ChevronDown } from './Icons.js';
// import { useLanguage } from '../contexts/LanguageContext.js';
// import { SUPPORTED_LANGUAGES } from '../i18n/dictionaries.js';

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const current = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const handleSelect = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        title={t.nav.language}
        aria-label={t.nav.language}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-gray-300 hover:text-[#00ff88] border border-[#00d9ff]/20 hover:border-[#00ff88]/60 rounded-md transition-all bg-[#0a0e27]/40 hover:bg-[#0a0e27]/70"
      >
        <Globe className="w-4 h-4" />
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden lg:inline text-xs uppercase tracking-wide">
          {current.code === 'zh-cn'
            ? 'ZH'
            : current.code === 'zh-tw'
            ? 'TW'
            : current.code.split('-')[0].toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-lg border border-[#00d9ff]/30 bg-[#0a0e27]/95 backdrop-blur-md shadow-xl shadow-black/50 z-50 overflow-hidden animate-fade-in animate-slide-in-from-top-2"
          style={{ animationDuration: '150ms' }}
        >
          <div className="px-3 py-2 border-b border-[#00d9ff]/20 text-xs uppercase tracking-wider text-[#00d9ff]/80">
            {t.nav.language}
          </div>
          <ul className="py-1">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isActive = language === lang.code;
              return (
                <li key={lang.code}>
                  <button
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-[#00ff88]/10 text-[#00ff88]'
                        : 'text-gray-300 hover:bg-[#1a1f3a] hover:text-white'
                    }`}
                  >
                    <span className="text-lg leading-none">{lang.flag}</span>
                    <span className="flex-1 text-left">{lang.label}</span>
                    {isActive && <Check className="w-4 h-4 text-[#00ff88]" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

// export default LanguageSwitcher;

/* ========== js/components/Navigation.js ========== */
/**
 * Navigation.js — Barra de navegacao superior (v2 - MINIMAL)
 *
 * Mudancas da v1:
 * - REMOVIDOS os 5 links de secao (About, Projects, etc.) e o mobile menu
 * - Agora mostra APENAS "RENAN" + LanguageSwitcher sempre
 * - Os 4 botoes nos cantos do BrainMenu SAO o menu principal
 * - Click no RENAN: faz reset completo do BrainMenu (como F5) + scroll para o topo
 */
// import { useLanguage } from '../contexts/LanguageContext.js';
// import { LanguageSwitcher } from './LanguageSwitcher.js';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 64;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

function Navigation() {
  const { t: _t } = useLanguage(); // mantido para futuro uso, nao usado no momento

  const handleRenanClick = function(e) {
    e.preventDefault();
    // Reset completo do BrainMenu (para animacao, libera scroll lock, volta ao estado inicial)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('resetBrainMenu'));
    }
    // Scroll para o topo (secao home)
    scrollToSection('home');
    // Update URL
    history.replaceState(null, '', '#home');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-md border-b border-[#00d9ff]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={handleRenanClick}
            className="text-2xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d9ff] to-[#00ff88] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer select-none"
            title="Voltar ao inicio (reset da animacao)"
          >
            RENAN
          </a>
          <div className="pl-4 ml-2 border-l border-[#00d9ff]/20">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ========== js/components/Footer.js ========== */
/**
 * Footer.js — Rodapé do site
 */
// import { useLanguage } from '../contexts/LanguageContext.js';

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-[#00d9ff]/20 bg-[#0a0e27]/60 backdrop-blur-md mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00d9ff] to-[#00ff88] bg-clip-text text-transparent">
              RENAN
            </div>
            <div className="text-xs text-gray-500 mt-1">
              © {year} Renan Ananias. {t.home.subtitle}.
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#home" className="text-gray-400 hover:text-[#00ff88] transition-colors">
              {t.nav.home}
            </a>
            <a href="#about" className="text-gray-400 hover:text-[#00ff88] transition-colors">
              {t.nav.about}
            </a>
            <a href="#projects" className="text-gray-400 hover:text-[#00ff88] transition-colors">
              {t.nav.projects}
            </a>
            <a href="#visitors" className="text-gray-400 hover:text-[#00ff88] transition-colors">
              {t.nav.visitors}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-[#00ff88] transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          <a
            href="mailto:ananias.renan@gmail.com"
            className="text-sm text-[#00d9ff] hover:text-[#00ff88] transition-colors"
          >
            ananias.renan@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ========== js/components/VisitorsMap.js ========== */
/**
 * VisitorsMap.js — Mapa-múndi com rastreamento de visitantes
 *
 * Versão "no-build" do VisitorsMap.tsx do projeto original.
 * - Rastreia visitantes reais via localStorage + IP (ipapi.co)
 * - Mesmo IP → atualiza lastSeen + incrementa count
 * - BroadcastChannel para sync entre abas
 * - Sem dependência de tRPC
 */
// import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
// import { useLanguage } from '../contexts/LanguageContext.js';

const MAP_W = 5760;
const MAP_H = 2880;

const VISITORS_STORAGE_KEY = 'portfolio:visitors:v3';
const GEO_CACHE_KEY = 'portfolio:ip-geo:v2';
const GEO_CACHE_TTL = 6 * 60 * 60 * 1000;
const SESSION_KEY = 'portfolio:tracked:session';

const TEST_CITIES = [
  { country: 'Brasil', city: 'Rio de Janeiro', lat: -22.9068, lon: -43.1729, cc: 'BR' },
  { country: 'Portugal', city: 'Lisboa', lat: 38.7223, lon: -9.1393, cc: 'PT' },
  { country: 'España', city: 'Madrid', lat: 40.4168, lon: -3.7038, cc: 'ES' },
  { country: 'France', city: 'Paris', lat: 48.8566, lon: 2.3522, cc: 'FR' },
  { country: 'Deutschland', city: 'Berlin', lat: 52.52, lon: 13.405, cc: 'DE' },
  { country: 'Italia', city: 'Roma', lat: 41.9028, lon: 12.4964, cc: 'IT' },
  { country: 'United States', city: 'San Francisco', lat: 37.7749, lon: -122.4194, cc: 'US' },
  { country: 'United States', city: 'Chicago', lat: 41.8781, lon: -87.6298, cc: 'US' },
  { country: 'Canada', city: 'Toronto', lat: 43.6532, lon: -79.3832, cc: 'CA' },
  { country: 'México', city: 'Ciudad de México', lat: 19.4326, lon: -99.1332, cc: 'MX' },
  { country: 'Argentina', city: 'Buenos Aires', lat: -34.6037, lon: -58.3816, cc: 'AR' },
  { country: 'Chile', city: 'Santiago', lat: -33.4489, lon: -70.6693, cc: 'CL' },
  { country: '日本', city: '大阪', lat: 34.6937, lon: 135.5023, cc: 'JP' },
  { country: '中国', city: '上海', lat: 31.2304, lon: 121.4737, cc: 'CN' },
  { country: '中国', city: '北京', lat: 39.9042, lon: 116.4074, cc: 'CN' },
  { country: 'India', city: 'Mumbai', lat: 19.076, lon: 72.8777, cc: 'IN' },
  { country: 'India', city: 'Bengaluru', lat: 12.9716, lon: 77.5946, cc: 'IN' },
  { country: 'South Korea', city: '서울', lat: 37.5665, lon: 126.978, cc: 'KR' },
  { country: 'Singapore', city: 'Singapore', lat: 1.3521, lon: 103.8198, cc: 'SG' },
  { country: 'Australia', city: 'Melbourne', lat: -37.8136, lon: 144.9631, cc: 'AU' },
  { country: 'New Zealand', city: 'Auckland', lat: -36.8485, lon: 174.7633, cc: 'NZ' },
  { country: 'South Africa', city: 'Cape Town', lat: -33.9249, lon: 18.4241, cc: 'ZA' },
  { country: 'Egypt', city: 'Cairo', lat: 30.0444, lon: 31.2357, cc: 'EG' },
  { country: 'Nigeria', city: 'Lagos', lat: 6.5244, lon: 3.3792, cc: 'NG' },
  { country: 'Türkiye', city: 'Istanbul', lat: 41.0082, lon: 28.9784, cc: 'TR' },
  { country: 'UAE', city: 'Dubai', lat: 25.2048, lon: 55.2708, cc: 'AE' },
  { country: 'Россия', city: 'Москва', lat: 55.7558, lon: 37.6173, cc: 'RU' },
];

function latLonToXY(lat, lon) {
  const x = ((lon + 180) / 360) * MAP_W;
  const y = ((90 - lat) / 180) * MAP_H;
  return { x, y };
}

function nearestCity(lat, lon) {
  let best = TEST_CITIES[0];
  let bestDist = Infinity;
  for (const c of TEST_CITIES) {
    const dx = c.lon - lon;
    const dy = c.lat - lat;
    const d = dx * dx + dy * dy;
    if (d < bestDist) {
      bestDist = d;
      best = c;
    }
  }
  return { country: best.country, city: best.city, countryCode: best.cc };
}

function loadLocalVisitors() {
  try {
    const raw = localStorage.getItem(VISITORS_STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr.filter((v) => v && v.ip && v.latitude != null && v.longitude != null);
  } catch {
    return [];
  }
}

function saveLocalVisitors(v) {
  try {
    localStorage.setItem(VISITORS_STORAGE_KEY, JSON.stringify(v));
  } catch {}
}

function findVisitorByIP(visitors, ip) {
  return visitors.find((v) => v.ip === ip);
}

function computeStats(visitors) {
  const map = new Map();
  let totalViews = 0;
  for (const v of visitors) {
    const key = v.country || '—';
    map.set(key, (map.get(key) || 0) + 1);
    totalViews += v.count || 1;
  }
  const countries = Array.from(map.entries())
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count);
  return { totalVisitors: visitors.length, totalViews, countries };
}

function relativeTime(iso) {
  const ms = Date.now() - new Date(iso).getTime();
  if (ms < 0) return 'agora';
  const s = Math.floor(ms / 1000);
  if (s < 60) return 'agora';
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} h`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d} d`;
  return new Date(iso).toLocaleDateString();
}

async function fetchGeoFromIP() {
  try {
    const cached = localStorage.getItem(GEO_CACHE_KEY);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < GEO_CACHE_TTL) {
        return data;
      }
    }

    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 8000);
    const res = await fetch('https://ipapi.co/json/', {
      signal: ctrl.signal,
      headers: { Accept: 'application/json' },
    });
    clearTimeout(timeout);

    if (!res.ok) return null;

    const data = await res.json();
    if (data.error || !data.latitude || !data.longitude) return null;

    const result = {
      ip: data.ip || 'unknown',
      lat: parseFloat(data.latitude),
      lon: parseFloat(data.longitude),
      city: data.city || data.region || '—',
      country: data.country_name || data.country || '—',
      countryCode: data.country_code || '',
    };

    try {
      localStorage.setItem(
        GEO_CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), data: result })
      );
    } catch {}

    return result;
  } catch (e) {
    console.warn('[VisitorsMap] Erro ao consultar ipapi.co:', e);
    return null;
  }
}

function VisitorsMap() {
  const { t } = useLanguage();

  const [visitors, setVisitors] = useState([]);
  const [mode, setMode] = useState('loading');
  const [userGeo, setUserGeo] = useState(null);
  const [geoStatus, setGeoStatus] = useState('idle');
  const [pulseKey, setPulseKey] = useState(0);
  const channelRef = useRef(null);

  useEffect(() => {
    const local = loadLocalVisitors();
    setVisitors(local);
    setMode('self');
  }, []);

  useEffect(() => {
    if (mode === 'loading') return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, '1');

    setGeoStatus('loading');
    fetchGeoFromIP().then((geo) => {
      if (geo) {
        setUserGeo(geo);
        setGeoStatus('ok');
        recordVisit(geo);
      } else {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const { latitude, longitude } = pos.coords;
              const nearest = nearestCity(latitude, longitude);
              const fallbackGeo = {
                ip: `geo-${Date.now()}`,
                lat: latitude,
                lon: longitude,
                city: nearest.city,
                country: nearest.country,
                countryCode: nearest.countryCode,
              };
              setUserGeo(fallbackGeo);
              setGeoStatus('fallback');
              recordVisit(fallbackGeo);
            },
            () => {
              const defaultGeo = {
                ip: 'default-sp',
                lat: -23.5505,
                lon: -46.6333,
                city: 'São Paulo',
                country: 'Brasil',
                countryCode: 'BR',
              };
              setUserGeo(defaultGeo);
              setGeoStatus('error');
              recordVisit(defaultGeo);
            },
            { timeout: 5000, maximumAge: 60_000 }
          );
        } else {
          setGeoStatus('error');
        }
      }
    });
  }, [mode]);

  const recordVisit = useCallback((geo) => {
    setVisitors((prev) => {
      const existing = findVisitorByIP(prev, geo.ip);
      if (existing) {
        const updated = {
          ...existing,
          lastSeen: new Date().toISOString(),
          count: existing.count + 1,
        };
        const next = prev.map((v) => (v.ip === geo.ip ? updated : v));
        saveLocalVisitors(next);
        channelRef.current?.postMessage({ type: 'visitor-updated', visitor: updated });
        return next;
      } else {
        const newVisitor = {
          id: `v-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          ip: geo.ip,
          country: geo.country,
          city: geo.city,
          latitude: geo.lat,
          longitude: geo.lon,
          count: 1,
          firstSeen: new Date().toISOString(),
          lastSeen: new Date().toISOString(),
        };
        const next = [...prev, newVisitor];
        saveLocalVisitors(next);
        channelRef.current?.postMessage({ type: 'visitor-added', visitor: newVisitor });
        return next;
      }
    });
    setPulseKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (typeof BroadcastChannel === 'undefined') return;
    const ch = new BroadcastChannel('portfolio-visitors');
    channelRef.current = ch;
    ch.onmessage = (ev) => {
      if (ev.data?.type === 'visitor-added' || ev.data?.type === 'visitor-updated') {
        const visitor = ev.data.visitor;
        setVisitors((prev) => {
          const existing = findVisitorByIP(prev, visitor.ip);
          if (existing) {
            return prev.map((v) => (v.ip === visitor.ip ? { ...v, count: v.count + 1, lastSeen: visitor.lastSeen } : v));
          } else {
            return [...prev, visitor];
          }
        });
        setPulseKey((k) => k + 1);
      }
    };
    return () => ch.close();
  }, []);

  const stats = useMemo(() => computeStats(visitors), [visitors]);

  const dots = useMemo(() => {
    return visitors
      .map((v) => {
        const lat = typeof v.latitude === 'string' ? parseFloat(v.latitude) : v.latitude;
        const lon = typeof v.longitude === 'string' ? parseFloat(v.longitude) : v.longitude;
        if (lat == null || lon == null || isNaN(lat) || isNaN(lon)) return null;
        const { x, y } = latLonToXY(lat, lon);
        if (x < 0 || x > MAP_W || y < 0 || y > MAP_H) return null;
        const isUser = !!userGeo && Math.abs(lat - userGeo.lat) < 0.5 && Math.abs(lon - userGeo.lon) < 0.5;
        return { id: String(v.id), x, y, isUser, visitor: v };
      })
      .filter(Boolean);
  }, [visitors, userGeo]);

  return (
    <div className="w-full space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          key={pulseKey}
          className="bg-[#1a1f3a]/50 border border-[#00ff88]/40 p-4 rounded-lg text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#00ff88]/5 animate-pulse" />
          <div className="relative">
            <div className="text-3xl font-bold text-[#00ff88] flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
              {stats.totalViews}
            </div>
            <div className="text-sm text-gray-400 mt-1">{t.visitors.totalViews}</div>
          </div>
        </div>

        <div className="bg-[#1a1f3a]/50 border border-[#00d9ff]/30 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-[#00d9ff]">{stats.totalVisitors}</div>
          <div className="text-sm text-gray-400 mt-1">{t.visitors.totalVisitors}</div>
        </div>

        <div className="bg-[#1a1f3a]/50 border border-[#00ff88]/30 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-[#00ff88]">{stats.countries.length}</div>
          <div className="text-sm text-gray-400 mt-1">{t.visitors.countries}</div>
        </div>

        {stats.countries.length > 0 && stats.countries[0]?.country && (
          <div className="bg-[#1a1f3a]/50 border border-[#00ff88]/30 p-4 rounded-lg text-center">
            <div className="text-xl font-bold text-[#00ff88] truncate">{stats.countries[0].country}</div>
            <div className="text-sm text-gray-400 mt-1">{t.visitors.topCountry}</div>
          </div>
        )}
      </div>

      {/* Mapa-mundi */}
      <div className="bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg overflow-hidden backdrop-blur-sm p-3">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                mode === 'self' ? 'bg-[#00d9ff] animate-pulse' : 'bg-gray-500'
              }`}
            />
            <span className="text-gray-400">
              {mode === 'self' && geoStatus === 'loading' && t.visitors.trackingYou}
              {mode === 'self' && geoStatus === 'ok' && t.visitors.liveTracking}
              {mode === 'self' && geoStatus === 'fallback' && t.visitors.geoFallback}
              {mode === 'self' && geoStatus === 'error' && t.visitors.geoError}
              {mode === 'loading' && t.visitors.loading}
            </span>
            {userGeo && mode === 'self' && (
              <span className="text-gray-500 hidden sm:inline">
                · {userGeo.city}, {userGeo.country}
              </span>
            )}
          </div>
        </div>

        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto block"
          style={{ aspectRatio: '2 / 1', minHeight: '320px', maxHeight: '560px' }}
        >
          <defs>
            <radialGradient id="ocean" cx="50%" cy="50%" r="75%">
              <stop offset="0%" stopColor="#0d1a3a" />
              <stop offset="100%" stopColor="#050a1f" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width={MAP_W} height={MAP_H} fill="url(#ocean)" />

          <image
            href="assets/world-map.svg"
            x="0"
            y="0"
            width={MAP_W}
            height={MAP_H}
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: 'brightness(1.4) saturate(0.4)' }}
            opacity="0.9"
          />

          <g stroke="rgba(0, 255, 136, 0.06)" strokeWidth="2" fill="none" pointerEvents="none">
            {Array.from({ length: 12 }).map((_, i) => {
              const y = (i + 1) * (MAP_H / 13);
              return <line key={`h${i}`} x1="0" y1={y} x2={MAP_W} y2={y} />;
            })}
            {Array.from({ length: 24 }).map((_, i) => {
              const x = (i + 1) * (MAP_W / 25);
              return <line key={`v${i}`} x1={x} y1="0" x2={x} y2={MAP_H} />;
            })}
            <line x1="0" y1={MAP_H / 2} x2={MAP_W} y2={MAP_H / 2} stroke="rgba(0, 217, 255, 0.12)" strokeWidth="3" />
            <line x1={MAP_W / 2} y1="0" x2={MAP_W / 2} y2={MAP_H} stroke="rgba(0, 217, 255, 0.12)" strokeWidth="3" />
          </g>

          {dots.map((d, idx) => {
            const color = d.isUser ? '#00d9ff' : '#00ff88';
            const delay = `${(idx % 7) * 0.25}s`;
            return (
              <g key={`${d.id}-${idx}`} className="visitor-marker" style={{ cursor: 'pointer' }}>
                <circle cx={d.x} cy={d.y} r="40" fill="none" stroke={color} strokeWidth="6" opacity="0.7">
                  <animate attributeName="r" values="40;120;40" dur="2.2s" repeatCount="indefinite" begin={delay} />
                  <animate attributeName="opacity" values="0.7;0;0.7" dur="2.2s" repeatCount="indefinite" begin={delay} />
                </circle>
                <circle cx={d.x} cy={d.y} r="22" fill={color} opacity="0.25" />
                <circle cx={d.x} cy={d.y} r="14" fill={color} stroke="#0a0e27" strokeWidth="4">
                  <animate attributeName="r" values="14;20;14" dur="2.2s" repeatCount="indefinite" begin={delay} />
                </circle>
                <title>
                  {`${d.visitor.city || t.common.unknown}, ${d.visitor.country || t.common.unknown} (${d.visitor.count} ${t.visitors.visits})${
                    d.isUser ? ` — ${t.visitors.youAreHere}` : ''
                  }`}
                </title>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Lista de visitantes recentes */}
      {visitors.length > 0 && (
        <div className="bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-[#00ff88] mb-4">{t.visitors.recentVisitors}</h3>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {(() => {
              const sorted = [...visitors]
                .map((v) => {
                  const lat = typeof v.latitude === 'string' ? parseFloat(v.latitude) : v.latitude;
                  const lon = typeof v.longitude === 'string' ? parseFloat(v.longitude) : v.longitude;
                  const isUser = !!userGeo && lat != null && lon != null && Math.abs(lat - userGeo.lat) < 0.5 && Math.abs(lon - userGeo.lon) < 0.5;
                  return { visitor: v, lat, lon, isUser, ts: new Date(v.lastSeen).getTime() };
                })
                .sort((a, b) => {
                  if (a.isUser && !b.isUser) return -1;
                  if (!a.isUser && b.isUser) return 1;
                  return b.ts - a.ts;
                })
                .slice(0, 12);
              return sorted.map(({ visitor, isUser }, idx) => (
                <div
                  key={`${visitor.id}-${idx}`}
                  className={`flex items-center justify-between text-sm p-2 rounded border transition-colors ${
                    isUser
                      ? 'bg-[#00d9ff]/10 border-[#00d9ff]/50 hover:border-[#00d9ff]'
                      : 'bg-[#0a0e27]/50 border-[#00d9ff]/20 hover:border-[#00ff88]/50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div
                      className={`w-2 h-2 rounded-full animate-pulse flex-shrink-0 ${
                        isUser ? 'bg-[#00d9ff]' : 'bg-[#00ff88]'
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-gray-200 truncate">
                        {visitor.city || t.common.unknown}
                        {isUser && <span className="ml-2 text-[#00d9ff] text-xs font-semibold">({t.visitors.youAreHere})</span>}
                      </div>
                      <div className="text-xs text-gray-400 truncate">
                        {visitor.country || t.common.unknown}
                        {' · '}
                        <span className="text-[#00ff88] font-semibold">{visitor.count} {t.visitors.visits}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 flex-shrink-0 ml-2">
                    {relativeTime(visitor.lastSeen)}
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      )}

      {visitors.length === 0 && mode === 'self' && geoStatus !== 'loading' && (
        <div className="bg-[#1a1f3a]/50 border border-[#00d9ff]/20 rounded-lg p-8 backdrop-blur-sm text-center">
          <p className="text-gray-400">
            {t.visitors.geoError}
          </p>
        </div>
      )}
    </div>
  );
}

/* ========== js/components/VideoBackground.js ========== */
/**
 * VideoBackground.js — Camada de fundo com video em loop (Sessao 21.2 - v3)
 *
 * Comportamento por orientacao:
 * - LANDSCAPE (PC, tablet deitado, telas horizontais):
 *   - Video rotacionado 90 GRAUS (deita o video vertical)
 *   - width: 100vh (a altura vira a largura apos rotacao)
 *   - height: 100vw (a largura vira a altura apos rotacao)
 *   - Com video 9:16 em tela 16:9, a rotacao faz o video virar 16:9
 *     e o cover preenche 100% SEM ZOOM AGRESSSIVO
 *   - Sem rotação + cover em landscape, o video daria zoom agressivo
 *     (cobriria a largura com um pedaco gigante do video)
 *
 * - PORTRAIT (mobile, telas verticais):
 *   - Video em pe (sem rotacao), como o arquivo original
 *   - width: 100vw, height: 100vh
 *   - Com video 9:16 em tela 9:16, encaixa PERFEITAMENTE
 *   - Em telas 9:18, sobra topo/fundo (crop minimo, nao zoom)
 *
 * Dinamico:
 * - useState(isLandscape) detecta orientacao
 * - useEffect adiciona listener de resize
 * - Ao redimensionar a janela, a orientacao recalcula
 *   e o video se adapta (rotação 90° ↔ sem rotação)
 *
 * Otimizacoes:
 * - willChange: 'transform' (composicao GPU)
 * - muted (sem som)
 * - playsInline (mobile iOS)
 * - disablePictureInPicture, disableRemotePlayback
 * - pointerEvents: 'none' no container (clicks passam)
 * - zIndex: 0 (abaixo de tudo)
 *
 * Fallback:
 * - backgroundColor: '#0a0e27' no container (aparece enquanto carrega)
 *
 * v3: arquivo circuit-brain-v2.mp4 com rotação dinâmica por orientação
 */
// import { useEffect, useState } from 'react';

function VideoBackground() {
  // Detecta orientacao: landscape (PC horizontal) vs portrait (mobile vertical)
  // Lazy initializer: usa o tamanho REAL da janela no primeiro render
  const [isLandscape, setIsLandscape] = useState(function() {
    if (typeof window !== 'undefined') {
      return window.innerWidth > window.innerHeight;
    }
    return true;  // fallback (SSR ou ambiente sem window)
  });

  // Listener de resize: recalcula orientacao ao redimensionar
  useEffect(function() {
    function handleResize() {
      setIsLandscape(window.innerWidth > window.innerHeight);
    }
    handleResize();  // sincroniza no mount (caso o valor inicial esteja errado)
    window.addEventListener('resize', handleResize);
    return function() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: '#0a0e27',  // fallback enquanto carrega
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        style={{
          // Posicao absoluta: necessario para o translate(-50%, -50%) centralizar
          position: 'absolute',
          top: '50%',
          left: '50%',
          // Dimensoes dinamicas baseadas na orientacao:
          // - Landscape: width=100vh, height=100vw (preparado para rotacao 90°)
          // - Portrait:  width=100vw, height=100vh (dimensoes normais)
          width: isLandscape ? '100vh' : '100vw',
          height: isLandscape ? '100vw' : '100vh',
          // Transform: centralizar SEMPRE + rotacionar 90° SE landscape
          // - Landscape: translate(-50%, -50%) rotate(90deg)
          //   → 1) translate centraliza o video
          //   → 2) rotate gira 90° em torno do centro (que ja esta centralizado)
          // - Portrait:  translate(-50%, -50%) (sem rotacao)
          transform: isLandscape
            ? 'translate(-50%, -50%) rotate(90deg)'
            : 'translate(-50%, -50%)',
          // Cobre 100% da tela (com crop minimo se proporcoes nao baterem)
          // Em landscape com video 9:16 e tela 16:9, o cover vira "perfeito" (sem crop)
          objectFit: 'cover',
          display: 'block',
          // Composição GPU para preservar qualidade e suavidade
          willChange: 'transform',
        }}
      >
        {/* Video v2 - 0.87 MB, codec H.264 preservado */}
        <source src="midia/circuit-brain-v2.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

// export { VideoBackground };

/* ========== js/components/BrainMenu.js ========== */
/**
 * BrainMenu.js — Hero animado do cerebro neural (v8.7 - ANIMACAO UNIFICADA)
 *
 * Mudancas da v8.7 (Sessão 20.7):
 * - Animacao UNIFICADA via requestAnimationFrame (nao mais CSS transition + setInterval)
 * - SCRAMBLE + DESCIDA + CRESCIMENTO acontecem AO MESMO TEMPO (sincronizados)
 * - Duracao: 2500ms (mesma da Matrix)
 * - Durante a descida:
 *   1. SCRAMBLE: caracteres vao sendo "travados" da esquerda para direita
 *   2. POSICAO: top desce linearmente de 6% para 50% (centro)
 *   3. TAMANHO: cresce em DEGRAUS de 20% (1.0x → 1.2x → 1.4x → 1.6x → 1.8x → 2.0x)
 * - Quando termina: tudo no centro, desembaralhado, com tamanho DOBRO
 *
 * Mudancas da v8.6 (Sessão 20.6):
 * - Animacao de scramble + centralizar + fonte +50% (CSS transition, separado)
 *
 * Mudancas da v8.5 (Sessão 20.5):
 * - pad = max(140, min(minDim * 0.29, 210)) (+10px nos 3 limites)
 *
 * Mudancas da v8.4 (Sessão 20.4):
 * - BUG FIX FINAL: HomeSection simplificado
 *
 * Mudancas da v6 (Matrix Trail):
 * - REMOVIDA rotacao do cerebro durante expand
 * - Botoes dos cantos aparecem DURANTE os trails
 * - Listener de `resetBrainMenu` para reiniciar tudo
 * - Trail duration 1500ms
 */
// import { useEffect, useState, useRef, useMemo } from 'react';
// import { useLanguage } from '../contexts/LanguageContext.js';

const SECTIONS = [
  { id: 'about',    img: 'img/brain_layer_about.png',    emoji: '👤', labelKey: 'about',    corner: 'top-left',     color: '#ffd60a' },
  { id: 'projects', img: 'img/brain_layer_projects.png', emoji: '💼', labelKey: 'projects', corner: 'top-right',    color: '#00d4ff' },
  { id: 'visitors', img: 'img/brain_layer_visitors.png', emoji: '🌍', labelKey: 'visitors', corner: 'bottom-left',  color: '#00ff88' },
  { id: 'contact',  img: 'img/brain_layer_contact.png',  emoji: '✉️', labelKey: 'contact',  corner: 'bottom-right', color: '#ff006e' },
];

// Funcao helper para calcular posicoes responsivas dos cantos
// Retorna posicoes em PIXELS baseadas no tamanho da viewport
//
// v8.5: pad = max(140, min(minDim * 0.29, 210)) (+10px vs v8.4)
// - 1280x720: pad = max(140, min(208.8, 210)) = 208.8px (vs 200px na v8.4)
//   Botoes a 208px das bordas laterais e 100px do fundo (em 720p)
// - 1920x1080: pad = max(140, min(313, 210)) = 210px (limitado pelo max)
// - 375x667 (mobile): pad = max(140, min(112.5, 210)) = 140px (limitado pelo min)
//   Botoes a 140px das bordas (vs 130px na v8.4)
function getTargetPosition(corner, windowSize) {
  const w = windowSize.w || 1920;
  const h = windowSize.h || 1080;
  const minDim = Math.min(w, h);
  // v8.5: pad = 29% do menor lado (min 140, max 210) - BOTOES +10px MAIS PRO CENTRO
  const pad = Math.max(140, Math.min(minDim * 0.29, 210));
  switch (corner) {
    case 'top-left':
      return { top: pad + 'px', left: pad + 'px' };
    case 'top-right':
      return { top: pad + 'px', left: (w - pad) + 'px' };
    case 'bottom-left':
      return { top: (h - pad) + 'px', left: pad + 'px' };
    case 'bottom-right':
      return { top: (h - pad) + 'px', left: (w - pad) + 'px' };
    default:
      return { top: '50%', left: '50%' };
  }
}

const MATRIX_CHARS = 'アイウエオカキクケコサシスセソタチツテトンナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789$#@%&*+=';

function scrollToSectionFromBrain(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 64;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

// =============================================================
// MatrixTextTrail — Trilha de caracteres Matrix que desce do TOPO
// ao CENTRO (v8.9 — timing ajustado).
// Igual a MatrixTrail (dos botoes) mas com:
// - Origem: (50%, 6%)  — topo centralizado
// - Destino: (50%, 50%) — centro da pagina
// - Tamanho: 4rem (igual ao h1 "RENAN" original)
// - Cor: ciano neon com glow
// - Duração: 1500ms (v8.9: reduzido de 2000ms para acompanhar o fade in do texto)
// - Delay: 30ms entre cada caractere (v8.9: reduzido de 50ms para trail terminar em 2370ms)
// - 30 caracteres (mais denso que os botoes)
// - Última particula termina em: 29*30 + 1500 = 870 + 1500 = 2370ms
//   (texto "RENAN" faz fade in em 2350ms = 20ms ANTES do trail acabar)
// =============================================================
function MatrixTextTrail() {
  const ref = useRef(null);
  const numParticles = 30;

  const particles = useMemo(function() {
    return Array.from({ length: numParticles }, function(_, i) {
      return {
        id: i,
        char: MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)],
        jx: (Math.random() - 0.5) * 120,  // jitter X (texto e maior que os botoes)
        jy: (Math.random() - 0.5) * 40,   // jitter Y
      };
    });
  }, []);

  useEffect(function() {
    if (!ref.current) return;

    const container = ref.current;
    const els = container.querySelectorAll('.text-trail-particle');
    const animations = [];

    els.forEach(function(el, i) {
      const particle = particles[i];
      const delay = i * 30;  // v8.9: 30ms entre cada caractere (vs 50ms v8.8)

      const anim = el.animate([
        // Estado inicial: invisivel no topo centralizado
        {
          left: '50%',
          top: '6%',
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0.3)',
        },
        // Aparece com jitter X (e como "explosao" do texto)
        {
          left: '50%',
          top: '6%',
          opacity: 1,
          transform: 'translate(calc(-50% + ' + particle.jx + 'px), calc(-50% + ' + particle.jy + 'px)) scale(1.4)',
          offset: 0.1,
        },
        // Estabiliza
        {
          left: '50%',
          top: '6%',
          opacity: 0.9,
          transform: 'translate(calc(-50% + ' + particle.jx + 'px), calc(-50% + ' + particle.jy + 'px)) scale(1)',
          offset: 0.25,
        },
        // Viaja para o centro (some ao chegar)
        {
          left: '50%',
          top: '50%',
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0.3)',
        },
      ], {
        duration: 1500,  // v8.9: reduzido de 2000ms
        delay: delay,
        easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
        fill: 'forwards',
      });
      animations.push(anim);
    });

    return function() {
      animations.forEach(function(a) { a.cancel(); });
    };
  }, [particles]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 21,  // ACIMA do texto (zIndex 20)
      }}
    >
      {particles.map(function(p) {
        return (
          <span
            key={p.id}
            className="text-trail-particle"
            style={{
              position: 'absolute',
              left: '50%',
              top: '6%',
              transform: 'translate(-50%, -50%)',
              fontFamily: '"Courier New", "Consolas", monospace',
              fontSize: '4rem',  // mesmo tamanho do h1 "RENAN"
              fontWeight: 'bold',
              color: '#00d9ff',
              textShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 30px rgba(0, 217, 255, 0.5)',
              opacity: 0,
              pointerEvents: 'none',
              whiteSpace: 'pre',
              userSelect: 'none',
              willChange: 'transform, opacity, left, top',
            }}
          >
            {p.char}
          </span>
        );
      })}
    </div>
  );
}

// =============================================================
// MatrixTrail — spawna N caracteres no centro, cada um voa
// ate o canto correspondente com estilo Matrix code rain
// =============================================================
function MatrixTrail({ section, trailOffset = 0, windowSize }) {
  const ref = useRef(null);
  const numParticles = 25;

  const particles = useMemo(function() {
    return Array.from({ length: numParticles }, function(_, i) {
      return {
        id: i,
        char: MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)],
      };
    });
  }, []);

  useEffect(function() {
    if (!ref.current) return;

    const container = ref.current;
    const els = container.querySelectorAll('.matrix-particle');
    // v8: posicoes responsivas (calculadas em pixels baseadas na viewport)
    const target = getTargetPosition(section.corner, windowSize);
    const animations = [];

    els.forEach(function(el, i) {
      const delay = (i * 25) + trailOffset;
      const jx = (Math.random() - 0.5) * 50;
      const jy = (Math.random() - 0.5) * 50;

      const anim = el.animate([
        {
          left: '50%',
          top: '50%',
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0.3)',
        },
        {
          left: '50%',
          top: '50%',
          opacity: 1,
          transform: 'translate(calc(-50% + ' + jx + 'px), calc(-50% + ' + jy + 'px)) scale(1.4)',
          offset: 0.1,
        },
        {
          left: '50%',
          top: '50%',
          opacity: 0.9,
          transform: 'translate(calc(-50% + ' + jx + 'px), calc(-50% + ' + jy + 'px)) scale(1)',
          offset: 0.25,
        },
        {
          left: target.left,
          top: target.top,
          opacity: 0.15,
          transform: 'translate(-50%, -50%) scale(0.4)',
        },
      ], {
        duration: 1500,
        delay: delay,
        easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
        fill: 'forwards',
      });
      animations.push(anim);
    });

    return function() {
      animations.forEach(function(a) { a.cancel(); });
    };
  }, [section.corner, trailOffset, windowSize.w, windowSize.h]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 25,
      }}
    >
      {particles.map(function(p) {
        return (
          <span
            key={p.id}
            className="matrix-particle"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              color: section.color,
              fontFamily: '"Courier New", "Consolas", monospace',
              fontSize: '20px',
              fontWeight: 'bold',
              textShadow: '0 0 6px ' + section.color + ', 0 0 14px ' + section.color + ', 0 0 28px ' + section.color,
              opacity: 0,
              pointerEvents: 'none',
              whiteSpace: 'pre',
              userSelect: 'none',
              willChange: 'transform, opacity, left, top',
            }}
          >
            {p.char}
          </span>
        );
      })}
    </div>
  );
}

// Sub-componente para cada botao do menu
function CornerButton({ section, onClick, windowSize }) {
  const [show, setShow] = useState(false);
  // v8: posicoes responsivas (pixels calculados baseado na viewport)
  // Garante que botoes NAO sao cortados em mobile
  const pos = getTargetPosition(section.corner, windowSize);
  useEffect(function() {
    const t = setTimeout(function() { setShow(true); }, section.delay || 0);
    return function() { clearTimeout(t); };
  }, [section.delay]);
  return (
    <button
      onClick={onClick}
      className="group"
      style={{
        position: 'absolute',
        ...pos,
        cursor: 'pointer',
        pointerEvents: 'auto',
        background: 'transparent',
        border: 'none',
        padding: 0,
        opacity: show ? 1 : 0,
        // translate(-50%, -50%) CENTRA o botao no anchor point (mesma posicao das letras)
        // scale(0.7 → 1) faz a animacao de entrada
        transform: show
          ? 'translate(-50%, -50%) scale(1)'
          : 'translate(-50%, -50%) scale(0.7)',
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1.5rem 2rem',
          background: 'rgba(26, 31, 58, 0.95)',
          border: '2px solid #00d9ff',
          borderRadius: '0.75rem',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 0 25px rgba(0, 217, 255, 0.3)',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={function(e) {
          e.currentTarget.style.borderColor = '#00ff88';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.6)';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseOut={function(e) {
          e.currentTarget.style.borderColor = '#00d9ff';
          e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 217, 255, 0.3)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <div style={{ fontSize: '3.5rem' }}>{section.emoji}</div>
        <div
          style={{
            color: '#00d9ff',
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            transition: 'color 0.3s ease',
          }}
        >
          {section.label}
        </div>
      </div>
    </button>
  );
}

function BrainMenu() {
  const [phase, setPhase] = useState('initial');
  const [buttonsVisible, setButtonsVisible] = useState(false);
  // v8.2: windowSize responsivo (usado por MatrixTrail e CornerButton)
  // Inicializa com window.innerWidth/Height REAIS (nao hardcoded 1920x1080)
  // Isso garante que mesmo no primeiro render (antes do useEffect),
  // o windowSize ja esta correto para a viewport do usuario
  const [windowSize, setWindowSize] = useState(function() {
    if (typeof window !== 'undefined') {
      return { w: window.innerWidth, h: window.innerHeight };
    }
    return { w: 1920, h: 1080 };
  });
  // v8.8: States para animacao MATRIX TEXT TRAIL (sem scramble, so descida + fade + scale)
  const [renanText, setRenanText] = useState('RENAN');
  const [subtitleText, setSubtitleText] = useState('CREATIVE DEVELOPER');
  const [centered, setCentered] = useState(false);
  // textTop: posicao vertical (string, ex: '6%', '50%')
  // textOpacity: 1.0 (visivel) → 0 (escondido) → 1 (visivel de novo)
  // textScale: multiplicador de tamanho (1.0 = normal, 2.0 = dobro)
  const [textTop, setTextTop] = useState('6%');
  const [textOpacity, setTextOpacity] = useState(1.0);
  const [textScale, setTextScale] = useState(1.0);
  const animationFrameRef = useRef(null);
  const subtitleTargetRef = useRef('CREATIVE DEVELOPER');
  // v9.0: refs para cada letra do texto (mantidos por compatibilidade, mas nao usados na v9.2)
  // v9.2: wave agora e via CSS animation (classe .wave-letter)
  const letterRefs = useRef([]);
  const subtitleLetterRefs = useRef([]);
  const { t } = useLanguage();

  // v8.8: Reset - quando phase volta para 'initial', cancela animacao e reseta tudo
  // v9.2: wave via CSS (classe .wave-letter removida automaticamente quando centered=false)
  useEffect(function() {
    if (phase === 'initial') {
      subtitleTargetRef.current = t.home.subtitle;
      setSubtitleText(t.home.subtitle);
      setRenanText('RENAN');
      setCentered(false);
      setTextTop('6%');
      setTextOpacity(1.0);  // v8.8: visivel no estado inicial
      setTextScale(1.0);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }
  }, [phase, t.home.subtitle]);

  // v9.3: Animacao UNIFICADA (SEM SCRAMBLE) - comeca quando phase='expand'
  // Quando termina (2500ms), setCentered(true) aciona a classe CSS .wave-letter
  // nos spans do h1 e p, iniciando o efeito WAVE.
  // Durante 2500ms:
  //   t=0-100ms (0-4%):       FADE OUT RAPIDO — texto "RENAN" some (opacity 1.0 → 0)
  //   t=100-2350ms (4-94%):   MATRIX TRAIL — trilha de caracteres visivel, texto invisivel
  //   t=2350-2500ms (94-100%): FADE IN + SCALE — texto real aparece 20ms ANTES do trail acabar
  // Posicao: top desce LINEARMENTE de 6% para 50% (v9.3: texto SOBREPOE o quadrado
  //   preto central, conforme pedido do usuario)
  // Tamanho: 1.0x durante o trail, salta para 2.0x (DOBRO) no fade in final
  useEffect(function() {
    if (phase === 'expand' && !centered) {
      const durationMs = 2500;
      const startTime = performance.now();

      function animate() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        // 1. POSICAO: top desce LINEARMENTE de 6% para 42% (v9.4: texto SOBREPOE
        //    o quadrado preto central, com o CENTRO do texto alinhado ao centro do quadrado)
        //    - top: 42% porque o texto tem ~16rem de altura total (RENAN 8rem + gap 2rem + sub 4rem)
        //    - Com scale 2.0, o centro do bloco de texto fica em ~50% quando top=42%
        //    - Assim RENAN fica perfeitamente sobrepondo o quadrado preto no centro
        const topPct = 6 + (42 - 6) * progress;
        setTextTop(topPct + '%');

        // 2. OPACIDADE + TAMANHO: 3 fases
        if (progress < 0.04) {
          // Fase 1: FADE OUT RAPIDO (0-100ms) — texto some mais rapido
          setTextOpacity(1 - (progress / 0.04));  // 1.0 → 0 em 100ms
          setTextScale(1.0);
        } else if (progress < 0.94) {
          // Fase 2: MATRIX TRAIL (100-2350ms) — texto invisivel, scale normal
          // A MatrixTextTrail (sub-componente) é renderizada por cima nesta fase
          setTextOpacity(0);
          setTextScale(1.0);
        } else {
          // Fase 3: FADE IN + SCALE (2350-2500ms) — texto aparece 20ms ANTES do trail acabar
          const appearProgress = (progress - 0.94) / 0.06;  // 0 → 1 em 150ms
          setTextOpacity(appearProgress);  // 0 → 1
          setTextScale(2.0);  // JA no tamanho DOBRO
        }

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Animacao terminada - garante estado final limpo
          setTextTop('42%');  // v9.4: texto SOBREPOE o quadrado preto com centro alinhado
          setTextOpacity(1.0);
          setTextScale(2.0);
          setCentered(true);
          animationFrameRef.current = null;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return function() {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [phase, centered]);  // v9.2: voltou para [phase, centered] (wave agora via CSS, sem race condition)

  // v9.3: Efeito WAVE agora e via CSS animation (classe .wave-letter nos spans)
  // O CSS @keyframes waveColors e definido em css/styles.css (arquivo estatico)
  // — NUNCA dentro de <style> no JSX, pq o React recriaria a cada render e
  // reiniciaria a animacao, fazendo o usuario ver apenas o primeiro frame.
  // A classe e aplicada condicionalmente: centered ? 'wave-letter' : ''
  // Isso garante que o wave so aparece DEPOIS do texto reaparecer grande no centro.
  // Quando centered vira false (reset), a classe e removida e o wave para.

  // v8.2: Listener de resize para recalcular posicoes responsivas
  useEffect(function() {
    function handleResize() {
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    }
    // handleResize() nao e necessario - useState initializer ja pegou o tamanho real
    window.addEventListener('resize', handleResize);
    return function() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Listener para reset (quando usuario clica RENAN ou botao de secao)
  useEffect(function() {
    const handleReset = function() {
      setPhase('initial');
      setButtonsVisible(false);
    };
    window.addEventListener('resetBrainMenu', handleReset);
    return function() {
      window.removeEventListener('resetBrainMenu', handleReset);
    };
  }, []);

  // Phase transitions
  useEffect(function() {
    if (phase === 'pulse') {
      const t1 = setTimeout(function() { setPhase('expand'); }, 700);
      return function() { clearTimeout(t1); };
    }
    if (phase === 'expand') {
      // Botoes comecam a aparecer DURANTE o trail (overlap = letras viram botoes)
      // Trail 3 (Contact) last particle ends at: 24*25 + 3*100 + 1500 = 2400ms
      // Botoes comecam em 1900ms (durante os 500ms finais dos trails)
      const tButtons = setTimeout(function() { setButtonsVisible(true); }, 1900);
      // Switch para menu quando os trails completarem (2500ms = 100ms buffer)
      const tNext = setTimeout(function() {
        setPhase('menu');
        // buttonsVisible continua true (botoes nao desmontam)
      }, 2500);
      return function() {
        clearTimeout(tButtons);
        clearTimeout(tNext);
      };
    }
  }, [phase]);

  // Body overflow management (movido do HomeSection)
  useEffect(function() {
    if (phase === 'initial' || phase === 'menu') {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
    return function() {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [phase]);

  const handleStart = function() {
    if (phase !== 'initial') return;
    setPhase('pulse');
  };

  const handleSectionClick = function(id) {
    return function(e) {
      e.preventDefault();
      // Liberar scroll lock (caso clique mid-animation)
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      // Scroll para a secao
      scrollToSectionFromBrain(id);
      // Update URL
      history.replaceState(null, '', '#' + id);
      // NAO dispara reset — só RENAN faz reset
    };
  };

  // Estilos dos 4 overlays de imagem (fade rapido no expand)
  const getOverlayStyle = function(section, index) {
    if (phase === 'initial' || phase === 'pulse') {
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(0deg) scale(1)',
        width: 'min(70vh, 70vw, 500px)',
        height: 'min(70vh, 70vw, 500px)',
        transition: 'all 1.5s cubic-bezier(0.65, 0, 0.35, 1) ' + (index * 200) + 'ms',
        opacity: 1,
        pointerEvents: 'none',
      };
    }
    return {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) scale(0.4)',
      width: 'min(70vh, 70vw, 500px)',
      height: 'min(70vh, 70vw, 500px)',
      transition: 'opacity 0.3s ease-out, transform 0.4s ease-out',
      opacity: 0,
      pointerEvents: 'none',
    };
  };

  return (
    <>
      {/* v9.3: CSS do wave agora e estatico (em css/styles.css)
          - Nao e recriado a cada render do React
          - A classe .wave-letter e aplicada nos spans quando centered=true */}
    <div
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* CAMADA 1: Imagem base do cerebro
          - SEM rotacao durante expand (v7: era feia, conflitava com as letras)
          - Apenas fade out + leve shrink */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: (phase === 'expand' || phase === 'menu') ? 0 : 1,
          transform: phase === 'expand' ? 'scale(0.7)' : 'scale(1)',
          transition: 'opacity 0.4s ease-out, transform 0.5s ease-out',
        }}
      >
        <img
          src="img/AI_Cerebro-com-chip-central.png"
          alt="Cerebro Neural"
          className="object-contain"
          style={{
            width: 'min(70vh, 70vw, 500px)',
            height: 'min(70vh, 70vw, 500px)',
            transform: phase === 'pulse' ? 'scale(1.15)' : 'scale(1)',
            transition: 'transform 0.6s ease',
            filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))',
          }}
        />
      </div>

      {/* CAMADA 2: 4 Overlays de imagem (fade rapido no expand) */}
      {SECTIONS.map(function(section, index) {
        return (
          <div key={section.id} style={getOverlayStyle(section, index)}>
            <img
              src={section.img}
              alt={section.id}
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(0, 255, 136, 0.6))',
              }}
            />
          </div>
        );
      })}

      {/* CAMADA 2.5: Matrix Trails (so aparece no expand)
          - 4 trilhas separadas, cada uma na cor da secao
          - 25 caracteres por trilha, fluindo do centro ao canto
          - Trail duration: 1500ms (mais lento = letras mais visiveis)
          - Final opacity: 0.15 (letras ainda visiveis atras dos botoes)
          - v8: windowSize prop para posicionamento responsivo */}
      {phase === 'expand' && SECTIONS.map(function(section, index) {
        return (
          <MatrixTrail
            key={section.id}
            section={section}
            trailOffset={index * 100}
            windowSize={windowSize}
          />
        );
      })}

      {/* CAMADA 2.7: MatrixTextTrail (v8.8) — Trilha Matrix para o texto "RENAN"
          - 30 caracteres descendo do TOPO (6%) ao CENTRO (50%)
          - Aparece em phase='expand' (mesmo tempo dos botoes)
          - Quando termina, o texto real aparece no centro (DOBRO do tamanho) */}
      {phase === 'expand' && <MatrixTextTrail />}

      {/* CAMADA 3: Nome RENAN + subtitle
          - v8.8: animacao UNIFICADA controlada por JS (requestAnimationFrame)
          - textTop: posicao vertical (atualizada de 6% ate 50% durante a animacao)
          - textOpacity: fade out (0-200ms) → invisivel (200-2300ms) → fade in (2300-2500ms)
          - textScale: 1.0x durante o trail, salta para 2.0x (DOBRO) no fade in final
          - SEM SCRAMBLE — em vez disso, MatrixTextTrail e renderizada por cima */}
      <div
        className="absolute left-1/2 text-center"
        style={{
          top: textTop,
          transform: 'translateX(-50%)',
          opacity: textOpacity,  // v8.8: controlado por rAF (fade in/out)
          zIndex: 20,
          transition: 'opacity 0.1s linear',  // suaviza transicoes rapidas
        }}
      >
        <h1
          className="font-bold"
          style={{
            fontSize: (4 * textScale) + 'rem',
            lineHeight: 1.1,
            // v9.4.3: COR e TEXTSHADOR removidos COMPLETAMENTE do h1/p.
            // Agora as cores padrao sao definidas via classes CSS nos spans:
            //   .letter-h1 (verde) e .letter-p (azul).
            // Quando .wave-letter e adicionado, o @keyframes waveColors (nivel de
            // cascata de animacao) SOBREPOE os valores das classes normais.
            // Nao ha mais conflito de heranca ou race condition!
            fontFamily: 'monospace',
            minWidth: '5ch',
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {renanText.split('').map(function(char, i) {
            return (
              <span
                key={'r-' + i}
                ref={function(el) { letterRefs.current[i] = el; }}
                // v9.4.3: letter-h1 = cor verde padrao.
                // wave-letter = animacao @keyframes waveColors (SOBREPOE a cor).
                // CSS variable --wave-delay controla o delay entre letras.
                className={'letter-h1' + (centered ? ' wave-letter' : '')}
                style={{ '--wave-delay': (i * 80) + 'ms' }}
              >
                {char}
              </span>
            );
          })}
        </h1>
        <p
          style={{
            // v9.4.3: COR e TEXTSHADOW removidos COMPLETAMENTE.
            // Cores padrao via classes CSS .letter-p nos spans.
            fontSize: (1 * textScale) + 'rem',
            letterSpacing: '0.2em',
            marginTop: '0.5rem',
            fontFamily: 'monospace',
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          {subtitleText.split('').map(function(char, i) {
            return (
              <span
                key={'s-' + i}
                ref={function(el) { subtitleLetterRefs.current[i] = el; }}
                // v9.4.3: letter-p = cor azul padrao.
                // wave-letter = animacao @keyframes waveColors (SOBREPOE a cor).
                className={'letter-p' + (centered ? ' wave-letter' : '')}
                style={{ '--wave-delay': (i * 80) + 'ms' }}
              >
                {char}
              </span>
            );
          })}
        </p>
      </div>

      {/* CAMADA 4: CTA "Explore My Work" (so no initial) */}
      {phase === 'initial' && (
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
          }}
        >
          <button
            onClick={handleStart}
            style={{
              padding: '1rem 2.5rem',
              border: '2px solid #00ff88',
              color: '#00ff88',
              background: 'rgba(10, 14, 39, 0.5)',
              fontSize: '1.1rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={function(e) {
              e.currentTarget.style.background = '#00ff88';
              e.currentTarget.style.color = '#0a0e27';
            }}
            onMouseOut={function(e) {
              e.currentTarget.style.background = 'rgba(10, 14, 39, 0.5)';
              e.currentTarget.style.color = '#00ff88';
            }}
          >
            {t.home.cta}
          </button>
        </div>
      )}

      {/* CAMADA 5: 4 Botoes nos cantos
          - Renderiza quando buttonsVisible (durante expand) ou phase === 'menu'
          - Z-index 30 (acima dos trails em z-index 25)
          - Botoes com delay escalonado (0, 150, 300, 450ms)
          - v8: windowSize prop para posicionamento responsivo */}
      {buttonsVisible && (
        <div className="absolute inset-0" style={{ zIndex: 30, pointerEvents: 'none' }}>
          {SECTIONS.map(function(section, i) {
            return (
              <CornerButton
                key={section.id}
                section={{
                  ...section,
                  delay: i * 150,
                  label: t.nav[section.labelKey],
                }}
                onClick={handleSectionClick(section.id)}
                windowSize={windowSize}
              />
            );
          })}
        </div>
      )}
    </div>
    </>
  );
}

/* ========== js/sections/HomeSection.js ========== */
/**
 * HomeSection.js — Secao inicial (hero)
 *
 * v6: REMOVIDO flex/min-h-screen/pt-16/overflow-hidden.
 * Antes, esses estilos CONFLITAVAM com BrainMenu (height: 100vh):
 * - pt-16 (64px) + justify-center empurrava o BrainMenu 100vh
 *   para FORA da section em ~32px (overflow-hidden cortava o fundo)
 * - Resultado: botoes bottom (Visitors/Contact) eram cortados pela borda
 * Agora a section e' apenas um wrapper relativo; o BrainMenu controla 100%.
 */
// import ErrorBoundary from '../components/ErrorBoundary.js';
// import { BrainMenu } from '../components/BrainMenu.js';

function HomeSection() {
  return (
    <section id="home" className="relative scroll-mt-20">
      <ErrorBoundary>
        <BrainMenu />
      </ErrorBoundary>
    </section>
  );
}

/* ========== js/sections/AboutSection.js ========== */
/**
 * AboutSection.js — Sobre Mim, Habilidades, Experiência
 */
// import { useEffect, useState } from 'react';
// import { TechIcon } from '../components/tech-icons/TechIcon.js';
// import { useLanguage } from '../contexts/LanguageContext.js';

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

function AboutSection() {
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

/* ========== js/sections/ProjectsSection.js ========== */
/**
 * ProjectsSection.js — Lista de projetos + testemunhos
 */
// import { useEffect, useState } from 'react';
// import { ExternalLink, Github, Star } from '../components/Icons.js';
// import { useLanguage } from '../contexts/LanguageContext.js';

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
  {
    id: 6,
    title: 'Roleta',
    period: '',
    descKey: 'proj6Desc',
    tags: ['Slot Machine', 'JavaScript', 'PAR Sheet', 'House Edge'],
    image: 'img/roleta.webp',
    gradient: '',
    link: '#roleta',
    linkType: 'view',
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

function ProjectsSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [privateMsgFor, setPrivateMsgFor] = useState(null);
  const [showRoletaModal, setShowRoletaModal] = useState(false);
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
    if (link === '#roleta') {
      // Projeto Roleta -> abre modal especial com iframe
      setShowRoletaModal(true);
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
  const closeRoletaModal = () => setShowRoletaModal(false);

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

      {/* Modal: Projeto Roleta (altura aumentada +300px vertical) */}
      {showRoletaModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer p-4"
          onClick={closeRoletaModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#0b0f19] border-2 border-[#00d9ff]/50 rounded-xl overflow-hidden shadow-2xl cursor-default flex flex-col"
            style={{ width: 'min(90vw, 50vw)', height: 'min(90vh, calc(50vh + 300px))' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1a1f3a]/80 border-b border-[#00d9ff]/30 shrink-0">
              <h3 className="text-lg font-bold text-[#00ff88] tracking-wider">
                🎰 Roleta — Cyber Neon Slots
              </h3>
              <button
                type="button"
                onClick={closeRoletaModal}
                className="text-gray-400 hover:text-white text-2xl leading-none cursor-pointer bg-transparent border-none hover:rotate-90 transition-transform duration-200"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            {/* Iframe */}
            <div className="flex-1 relative overflow-hidden">
              <iframe
                src="portfolio/roletasBET/index.html"
                title="Roleta Cyber Neon Slots"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ========== js/sections/VisitorsSection.js ========== */
/**
 * VisitorsSection.js — Wrapper para o VisitorsMap
 */
// import { useEffect, useState } from 'react';
// import { VisitorsMap } from '../components/VisitorsMap.js';
// import { useLanguage } from '../contexts/LanguageContext.js';

function VisitorsSection() {
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

/* ========== js/sections/ContactSection.js ========== */
/**
 * ContactSection.js — Formulário de contato + socials
 */
// import { useEffect, useState } from 'react';
// import { Mail, Linkedin, Github, Twitter, Send } from '../components/Icons.js';
// import { useLanguage } from '../contexts/LanguageContext.js';

function ContactSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const subject = encodeURIComponent(formData.subject || 'Project inquiry');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      window.location.href = `mailto:ananias.renan@gmail.com?subject=${subject}&body=${body}`;
      setStatus('opening');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Mail, label: t.contact.socials.email, href: 'mailto:ananias.renan@gmail.com', color: 'text-[#00ff88]' },
    { icon: Linkedin, label: t.contact.socials.linkedin, href: '#', color: 'text-[#00d9ff]' },
    { icon: Github, label: t.contact.socials.github, href: 'https://github.com/Renan-Ananias', color: 'text-[#00ff88]' },
    { icon: Twitter, label: t.contact.socials.twitter, href: '#', color: 'text-[#00d9ff]' },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen relative z-20 pt-24 pb-16 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 animate-glow-pulse">
            <span className="bg-gradient-to-r from-[#00ff88] via-[#00d9ff] to-[#00ff88] bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#00ff88] font-semibold mb-2">{t.contact.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:shadow-lg focus:shadow-[#00ff88]/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[#00ff88] font-semibold mb-2">{t.contact.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:shadow-lg focus:shadow-[#00ff88]/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-[#00ff88] font-semibold mb-2">{t.contact.subject}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:shadow-lg focus:shadow-[#00ff88]/20 transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-[#00ff88] font-semibold mb-2">{t.contact.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:shadow-lg focus:shadow-[#00ff88]/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-[#0a0e27] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? t.contact.sending : t.contact.send}
              </button>

              {status === 'opening' && (
                <p className="text-[#00ff88] text-sm text-center">{t.contact.openingClient}</p>
              )}
              {status === 'error' && (
                <p className="text-[#ff4444] text-sm text-center">{t.contact.failed}</p>
              )}
            </form>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold section-title-base section-title-wave mb-6">{t.contact.connectWithMe}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-[#1a1f3a]/50 border border-[#00d9ff]/30 rounded-lg hover:border-[#00ff88]/60 hover:bg-[#1a1f3a]/80 transition-all group"
                      >
                        <Icon className={`w-6 h-6 ${social.color} group-hover:scale-125 transition-transform`} />
                        <span className="text-gray-300 group-hover:text-[#00ff88] transition-colors">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-[#1a1f3a]/50 border border-[#00ff88]/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold section-title-base section-title-wave mb-4">{t.contact.responseTime}</h3>
                <p className="text-gray-300 mb-4">
                  {t.contact.responseTimeDesc}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse" />
                  <span className="text-[#00ff88]">{t.contact.available}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== js/App.js ========== */
/**
 * App.js — Componente raiz
 *
 * Equivalente ao App.tsx do projeto original, sem dependência
 * do shadcn/ui (Toaster, TooltipProvider) — substituídos por
 * implementação inline (toast local no ContactSection).
 */
// import ErrorBoundary from './components/ErrorBoundary.js';
// import { ThemeProvider } from './contexts/ThemeContext.js';
// import { LanguageProvider } from './contexts/LanguageContext.js';
// import { Navigation } from './components/Navigation.js';
// import { Footer } from './components/Footer.js';
// import { VideoBackground } from './components/VideoBackground.js';

// import { HomeSection } from './sections/HomeSection.js';
// import { AboutSection } from './sections/AboutSection.js';
// import { ProjectsSection } from './sections/ProjectsSection.js';
// import { VisitorsSection } from './sections/VisitorsSection.js';
// import { ContactSection } from './sections/ContactSection.js';

function App() {
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

// export default App;


/* ========== Bootstrap ========== */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
