/**
 * i18n.js — Sistema de tradução (português, inglês, espanhol, chinês, japonês)
 */
window.I18n = {};

var SUPPORTED_LANGUAGES = [
  { code: 'pt-br', label: 'Português (BR)', flag: '🇧🇷' },
  { code: 'en',    label: 'English (US)',    flag: '🇺🇸' },
  { code: 'es',    label: 'Español',         flag: '🇪🇸' },
  { code: 'zh-cn', label: '中文 (简体)',      flag: '🇨🇳' },
  { code: 'zh-tw', label: '中文 (繁體)',      flag: '🇹🇼' },
  { code: 'ja',    label: '日本語',           flag: '🇯🇵' },
];

// Dicionário base: português
var ptBR = {
  nav: { home: 'Início', about: 'Sobre', projects: 'Projetos', visitors: 'Visitantes', contact: 'Contato', language: 'Idioma' },
  home: { subtitle: 'DESENVOLVEDOR CRIATIVO', tagline: 'Transformando ideias em experiências digitais interativas com design e tecnologia de ponta', cta: 'Explore Meu Trabalho' },
  about: {
    title: 'Sobre Mim', whoIAm: 'Quem Sou',
    bio1: 'Sou um desenvolvedor criativo apaixonado por construir experiências digitais bonitas e funcionais. Com uma base sólida tanto em design quanto em desenvolvimento, eu uno a estética à funcionalidade.',
    bio2: 'Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam, evoluindo para uma carreira dedicada a criar produtos digitais significativos.',
    quickFacts: 'Fatos Rápidos', location: 'Localização:', experience: 'Experiência:', focus: 'Foco:', passion: 'Paixão:',
    skillsTitle: 'Habilidades & Expertise', frontend: 'Frontend', backend: 'Backend', tools: 'Ferramentas', experienceTitle: 'Experiência',
    locationValue: 'Rio de Janeiro, Brasil', experienceValue: '10+ anos', focusValue: 'Web Design, UI UX & Development', passionValue: 'Experiências Interativas',
    exp1Title: 'Freelance Web Designer & Digital Content Creator', exp1Company: 'Autônomo', exp1Period: '2019 – Presente',
    exp1Desc1: 'Desenvolvimento, personalização, manutenção e otimização de websites para clientes e projetos pessoais.',
    exp1Desc2: 'Criação de assets digitais, edição de imagens, conteúdo multimídia, identidade visual e materiais promocionais utilizando Photoshop e ferramentas com IA.',
    exp2Title: 'Diversas Funções Profissionais & Projetos Independentes', exp2Company: 'Autônomo', exp2Period: '2016 – 2019',
    exp2Desc1: 'Experiência em múltiplos setores, incluindo construção civil, trabalho braçal, serviços e projetos digitais independentes.',
    exp2Desc2: 'Desenvolvi habilidades práticas em trabalho em equipe, adaptabilidade, resiliência, atendimento ao cliente e resolução de problemas.',
    exp3Title: 'Serviço Militar – Força Aérea Brasileira', exp3Company: 'Força Aérea Brasileira', exp3Period: '2010 – 2016',
    exp3Desc1: 'Carreira militar focada em disciplina, trabalho em equipe, planejamento operacional, responsabilidade e desempenho sob pressão.',
  },
  projects: {
    title: 'Projetos', subtitle: 'Uma seleção dos meus trabalhos recentes',
    viewProject: 'Ver Projeto', viewCode: 'Ver Código', testimonials: 'Comentários de Clientes', visitSite: 'Visitar Site',
    test1Title: 'Altamente capaz e flexível', test1Text: 'É muito fácil colaborar com o Renan. Ele tem ótimas ideias e é extremamente capaz de atender a demandas urgentes!',
    test2Title: 'Um designer verdadeiramente inspirador', test2Text: 'O olhar do Sr. Ananias para o design é incrível. Ele consegue destacar a beleza em coisas simples, um designer verdadeiramente inspirador.',
    proj1Desc: 'Identidade visual, site personalizado e conteúdo multimídia para um projeto de comunidade gamer.',
    proj2Desc: 'Romance original que combina dark romance e fantasia, com arte digital personalizada para construção de mundo e capa.',
    proj3Desc: 'Uma coleção de projetos de design de sites, branding e conteúdo digital entregues a clientes em múltiplos setores.',
    proj4Desc: 'Painel de analytics em tempo real com gráficos interativos e visualização de dados.',
    proj5Desc: 'Interface de chat inteligente com processamento de linguagem natural e aprendizado de máquina.',
    proj6Desc: 'Sem licença SPA/MF não pode operar de verdade no Brasil. Isso é só uma demonstração de skill em desenvolvimento web + lógica de jogos.',
    privateLinkMessage: 'O dono pediu para não divulgar',
  },
  visitors: {
    title: 'Visitantes', subtitle: 'Rastreamento de visitantes em tempo real ao redor do mundo',
    totalVisitors: 'Total de Visitantes', totalViews: 'Total de Visualizações', countries: 'Países', topCountry: 'Principal País',
    recentVisitors: 'Visitantes Recentes', liveTracking: 'Rastreamento ao vivo', loading: 'Carregando...',
    youAreHere: 'Você está aqui', trackingYou: 'Rastreando sua localização...',
    geoFallback: 'Localização aproximada (via navegador)', geoError: 'Não foi possível localizar',
    visits: 'visitas',
  },
  contact: {
    title: 'Entre em Contato',
    subtitle: 'Tem um projeto em mente ou quer colaborar? Adoraria ouvir de você.',
    name: 'Nome', email: 'Email', subject: 'Assunto', message: 'Mensagem',
    send: 'Enviar Mensagem', sending: 'Enviando...', openingClient: 'Abrindo seu cliente de email...',
    connectWithMe: 'Conecte-se Comigo', responseTime: 'Tempo de Resposta',
    responseTimeDesc: 'Normalmente respondo em 24-48 horas. Para assuntos urgentes, entre em contato por email.',
    available: 'Disponível para novos projetos',
    socials: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', twitter: 'Twitter' },
  },
  common: { unknown: 'Desconhecido' },
};

// ====== English ======
var en = {
  nav: { home: 'Home', about: 'About', projects: 'Projects', visitors: 'Visitors', contact: 'Contact', language: 'Language' },
  home: { subtitle: 'CREATIVE DEVELOPER', tagline: 'Transforming ideas into interactive digital experiences with cutting-edge design and technology', cta: 'Explore My Work' },
  about: {
    title: 'About Me', whoIAm: 'Who I Am',
    bio1: "I'm a creative developer passionate about building beautiful and functional digital experiences. With a strong foundation in both design and development, I bridge the gap between aesthetics and functionality.",
    bio2: 'My journey in tech started with a curiosity about how things work, evolving into a career dedicated to creating meaningful digital products that users love.',
    quickFacts: 'Quick Facts', location: 'Location:', experience: 'Experience:', focus: 'Focus:', passion: 'Passion:',
    skillsTitle: 'Skills & Expertise', frontend: 'Frontend', backend: 'Backend', tools: 'Tools', experienceTitle: 'Experience',
    locationValue: 'Rio de Janeiro, Brazil', experienceValue: '10+ years', focusValue: 'Web Design, UI UX & Development', passionValue: 'Interactive Experiences',
    exp1Title: 'Freelance Web Designer & Digital Content Creator', exp1Company: 'Independent', exp1Period: '2019 – Present',
    exp1Desc1: 'Development, customization, maintenance, and optimization of websites for clients and personal projects.',
    exp1Desc2: 'Creation of digital assets, image editing, multimedia content, visual branding, and promotional materials using Photoshop and AI-assisted tools.',
    exp2Title: 'Various Professional Roles & Independent Projects', exp2Company: 'Independent', exp2Period: '2016 – 2019',
    exp2Desc1: 'Experience in multiple sectors including construction, manual labor, services, and independent digital projects.',
    exp2Desc2: 'Developed practical skills in teamwork, adaptability, resilience, customer relations, and problem-solving.',
    exp3Title: 'Military Service – Brazilian Air Force', exp3Company: 'Brazilian Air Force', exp3Period: '2010 – 2016',
    exp3Desc1: 'Military career focused on discipline, teamwork, operational planning, responsibility, and performance under pressure.',
  },
  projects: {
    title: 'Projects', subtitle: 'A selection of my recent work', viewProject: 'View Project', viewCode: 'View Code',
    testimonials: 'Client Testimonials', visitSite: 'Visit Site',
    test1Title: 'Highly capable and flexible', test1Text: "It's very easy to collaborate with Renan. He has great ideas and is extremely capable of handling urgent demands!",
    test2Title: 'A truly inspiring designer', test2Text: "Mr. Ananias's eye for design is incredible. He can highlight the beauty in simple things, a truly inspiring designer.",
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
    totalVisitors: 'Total Visitors', totalViews: 'Total Views', countries: 'Countries', topCountry: 'Top Country',
    recentVisitors: 'Recent Visitors', liveTracking: 'Live tracking', loading: 'Loading...',
    youAreHere: 'You are here', trackingYou: 'Tracking your location...', geoFallback: 'Approximate location (via browser)',
    geoError: 'Could not locate', visits: 'visits',
  },
  contact: {
    title: 'Get In Touch', subtitle: "Have a project in mind or want to collaborate? I'd love to hear from you.",
    name: 'Name', email: 'Email', subject: 'Subject', message: 'Message',
    send: 'Send Message', sending: 'Sending...', openingClient: 'Opening your email client...',
    connectWithMe: 'Connect With Me', responseTime: 'Response Time',
    responseTimeDesc: 'I typically respond within 24-48 hours. For urgent matters, feel free to reach out via email.',
    available: 'Available for new projects',
    socials: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', twitter: 'Twitter' },
  },
  common: { unknown: 'Unknown' },
};

// ====== Español ======
var es = {
  nav: { home: 'Inicio', about: 'Sobre Mí', projects: 'Proyectos', visitors: 'Visitantes', contact: 'Contacto', language: 'Idioma' },
  home: { subtitle: 'DESARROLLADOR CREATIVO', tagline: 'Transformando ideas en experiencias digitales interactivas con diseño y tecnología de vanguardia', cta: 'Explora Mi Trabajo' },
  about: {
    title: 'Sobre Mí', whoIAm: 'Quién Soy',
    bio1: 'Soy un desarrollador creativo apasionado por construir experiencias digitales hermosas y funcionales.',
    bio2: 'Mi camino en la tecnología comenzó con la curiosidad de entender cómo funcionan las cosas.',
    quickFacts: 'Datos Rápidos', location: 'Ubicación:', experience: 'Experiencia:', focus: 'Enfoque:', passion: 'Pasión:',
    skillsTitle: 'Habilidades y Experiencia', frontend: 'Frontend', backend: 'Backend', tools: 'Herramientas', experienceTitle: 'Experiencia',
    locationValue: 'Río de Janeiro, Brasil', experienceValue: '10+ años', focusValue: 'Diseño Web, UI UX y Desarrollo', passionValue: 'Experiencias Interactivas',
    exp1Title: 'Diseñador Web Freelance y Creador de Contenido Digital', exp1Company: 'Independiente', exp1Period: '2019 – Presente',
    exp1Desc1: 'Desarrollo, personalización, mantenimiento y optimización de sitios web para clientes y proyectos personales.',
    exp1Desc2: 'Creación de activos digitales, edición de imágenes, contenido multimedia, marca visual y materiales promocionales.',
    exp2Title: 'Diversos Roles Profesionales y Proyectos Independientes', exp2Company: 'Independiente', exp2Period: '2016 – 2019',
    exp2Desc1: 'Experiencia en múltiples sectores incluyendo construcción, trabajo manual, servicios y proyectos digitales independientes.',
    exp2Desc2: 'Desarrolló habilidades prácticas en trabajo en equipo, adaptabilidad, resiliencia, atención al cliente y resolución de problemas.',
    exp3Title: 'Servicio Militar – Fuerza Aérea Brasileña', exp3Company: 'Fuerza Aérea Brasileña', exp3Period: '2010 – 2016',
    exp3Desc1: 'Carrera militar enfocada en disciplina, trabajo en equipo, planificación operativa, responsabilidad y desempeño bajo presión.',
  },
  projects: {
    title: 'Proyectos', subtitle: 'Una selección de mis trabajos recientes',
    viewProject: 'Ver Proyecto', viewCode: 'Ver Código', testimonials: 'Testimonios de Clientes', visitSite: 'Visitar Sitio',
    test1Title: 'Altamente capaz y flexible', test1Text: 'Es muy fácil colaborar con Renan. ¡Tiene grandes ideas y es extremadamente capaz de atender demandas urgentes!',
    test2Title: 'Un diseñador verdaderamente inspirador', test2Text: 'El ojo del Sr. Ananias para el diseño es increíble.',
    proj1Desc: 'Identidad visual, sitio personalizado y contenido multimedia para un proyecto de comunidad gamer.',
    proj2Desc: 'Novela original que combina dark romance y fantasía, con arte digital personalizado.',
    proj3Desc: 'Una colección de proyectos de diseño de sitios, branding y contenido digital.',
    proj4Desc: 'Panel de analytics en tiempo real con gráficos interactivos y visualización de datos.',
    proj5Desc: 'Interfaz de chat inteligente con procesamiento de lenguaje natural y aprendizaje automático.',
    proj6Desc: 'Sin licencia SPA/MF no puede operar realmente en Brasil. Esto es solo una demostración.',
    privateLinkMessage: 'El propietario pidió no divulgar',
  },
  visitors: {
    title: 'Visitantes', subtitle: 'Seguimiento de visitantes en tiempo real alrededor del mundo',
    totalVisitors: 'Total de Visitantes', totalViews: 'Total de Visualizaciones', countries: 'Países', topCountry: 'País Principal',
    recentVisitors: 'Visitantes Recientes', liveTracking: 'Seguimiento en vivo', loading: 'Cargando...',
    youAreHere: 'Estás aquí', trackingYou: 'Rastreando tu ubicación...', geoFallback: 'Ubicación aproximada',
    geoError: 'No se pudo ubicar', visits: 'visitas',
  },
  contact: {
    title: 'Ponte en Contacto', subtitle: '¿Tienes un proyecto en mente o quieres colaborar?',
    name: 'Nombre', email: 'Email', subject: 'Asunto', message: 'Mensaje',
    send: 'Enviar Mensaje', sending: 'Enviando...', openingClient: 'Abriendo tu cliente de email...',
    connectWithMe: 'Conéctate Conmigo', responseTime: 'Tiempo de Respuesta',
    responseTimeDesc: 'Normalmente respondo en un plazo de 24-48 horas.',
    available: 'Disponible para nuevos proyectos',
    socials: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', twitter: 'Twitter' },
  },
  common: { unknown: 'Desconocido' },
};

// ====== Dicionários ======
var dictionaries = {
  'pt-br': ptBR, en: en, es: es,
  'zh-cn': {
    nav: { home: '首页', about: '关于', projects: '项目', visitors: '访客', contact: '联系', language: '语言' },
    home: { subtitle: '创意开发者', tagline: '将创意转化为互动的数字体验', cta: '探索我的作品' },
    about: { title: '关于我', whoIAm: '我是谁', bio1: '我是一名富有创意的开发者', bio2: '我的技术之路始于对事物运作方式的好奇',
      quickFacts: '快速了解', location: '位置:', experience: '经验:', focus: '专注:', passion: '热情:',
      skillsTitle: '技能与专长', frontend: '前端', backend: '后端', tools: '工具', experienceTitle: '经验',
      locationValue: '里约热内卢, 巴西', experienceValue: '10+ 年', focusValue: '网页设计、UI/UX 与开发', passionValue: '互动体验',
      exp1Title: '自由职业网页设计师与数字内容创作者', exp1Company: '独立', exp1Period: '2019 – 至今',
      exp1Desc1: '为客户和个人项目开发、定制、维护和优化网站。',
      exp2Title: '多种职业角色与独立项目', exp2Company: '独立', exp2Period: '2016 – 2019',
      exp3Title: '兵役 – 巴西空军', exp3Company: '巴西空军', exp3Period: '2010 – 2016',
    },
    projects: { title: '项目', subtitle: '我近期作品的精选', viewProject: '查看项目', viewCode: '查看代码', testimonials: '客户评价', visitSite: '访问网站',
      test1Title: '能力强且灵活', test1Text: '与 Renan 合作非常容易。',
      test2Title: '真正鼓舞人心的设计师', test2Text: 'Ananias 先生的审美眼光令人惊叹。',
      proj1Desc: '为游戏社区项目提供视觉识别和定制网站。',
      proj6Desc: '没有SPA/MF许可证，无法在巴西真正运营。',
      privateLinkMessage: '业主要求不公开',
    },
    visitors: { title: '访客', subtitle: '全球访客实时追踪', totalVisitors: '总访客数', totalViews: '总浏览量', countries: '国家数',
      topCountry: '主要国家', recentVisitors: '最近访客', liveTracking: '实时追踪', loading: '加载中...',
      youAreHere: '你在这里', trackingYou: '正在定位你的位置...', geoFallback: '大致位置', geoError: '无法定位', visits: '次访问',
    },
    contact: { title: '联系我', subtitle: '有项目想合作或想交流？', name: '姓名', email: '邮箱', subject: '主题', message: '留言',
      send: '发送消息', sending: '发送中...', openingClient: '正在打开您的邮件客户端...',
      connectWithMe: '与我联系', responseTime: '回复时间', responseTimeDesc: '我通常在 24-48 小时内回复。',
      available: '可承接新项目', socials: { email: '邮箱', linkedin: 'LinkedIn', github: 'GitHub', twitter: 'Twitter' },
    },
    common: { unknown: '未知' },
  },
  'zh-tw': {
    nav: { home: '首頁', about: '關於', projects: '專案', visitors: '訪客', contact: '聯絡', language: '語言' },
    home: { subtitle: '創意開發者', tagline: '將創意轉化為互動的數位體驗', cta: '探索我的作品' },
    about: { title: '關於我', whoIAm: '我是誰', bio1: '我是一名富有創意的開發者',
      quickFacts: '快速瞭解', location: '位置:', experience: '經驗:', focus: '專注:', passion: '熱情:',
      skillsTitle: '技能與專長', frontend: '前端', backend: '後端', tools: '工具', experienceTitle: '經驗',
      locationValue: '里約熱內盧, 巴西', experienceValue: '10+ 年',
    },
    projects: { title: '專案', subtitle: '我近期作品的精選', viewProject: '查看專案', testimonials: '客戶評價', visitSite: '造訪網站',
      test1Title: '能力出眾且靈活', test2Title: '真正激勵人心的設計師',
      privateLinkMessage: '業主要求不公開',
    },
    visitors: { title: '訪客', subtitle: '全球訪客即時追蹤', totalVisitors: '總訪客數', totalViews: '總瀏覽量',
      countries: '國家數', topCountry: '主要國家', recentVisitors: '最近訪客',
      liveTracking: '即時追蹤', loading: '載入中...', youAreHere: '你在這裡',
      trackingYou: '正在定位你的位置...', geoFallback: '大致位置', geoError: '無法定位', visits: '次造訪',
    },
    contact: { title: '聯絡我', subtitle: '有專案想合作或想交流？', name: '姓名', email: '電子郵件',
      subject: '主題', message: '訊息', send: '傳送訊息', sending: '傳送中...',
      openingClient: '正在開啟您的郵件用戶端...', connectWithMe: '與我聯繫',
      responseTime: '回覆時間', responseTimeDesc: '我通常在 24-48 小時內回覆。',
      available: '可承接新專案',
      socials: { email: '電子郵件', linkedin: 'LinkedIn', github: 'GitHub', twitter: 'Twitter' },
    },
    common: { unknown: '未知' },
  },
  ja: {
    nav: { home: 'ホーム', about: 'について', projects: 'プロジェクト', visitors: '訪問者', contact: 'お問い合わせ', language: '言語' },
    home: { subtitle: 'クリエイティブ開発者', tagline: 'アイデアをインタラクティブなデジタル体験に', cta: '作品を見る' },
    about: { title: '自己紹介', whoIAm: '私について', bio1: '美しく機能的なデジタル体験の構築に情熱を持つクリエイティブ開発者です。',
      quickFacts: 'クイック情報', location: '所在地:', experience: '経験:', focus: 'フォーカス:', passion: '情熱:',
      skillsTitle: 'スキル & 専門知識', frontend: 'フロントエンド', backend: 'バックエンド', tools: 'ツール', experienceTitle: '経験',
      locationValue: 'リオデジャネイロ, ブラジル', experienceValue: '10+ 年',
    },
    projects: { title: 'プロジェクト', subtitle: '最近の作品のセレクション', viewProject: 'プロジェクトを見る',
      testimonials: 'クライアントの声', visitSite: 'サイトを見る',
      test1Title: '非常に有能で柔軟', test2Title: '真にインスピレーションを与えるデザイナー',
      privateLinkMessage: 'オーナー非公開希望',
    },
    visitors: { title: '訪問者', subtitle: '世界中の訪問者をリアルタイムで追跡',
      totalVisitors: '総訪問者数', totalViews: '総閲覧数', countries: '国数', topCountry: '主要国',
      recentVisitors: '最近の訪問者', liveTracking: 'ライブ追跡', loading: '読み込み中...',
      youAreHere: '現在地', trackingYou: '現在地を追跡中...', geoFallback: 'おおよその位置',
      geoError: '位置を特定できません', visits: '回訪問',
    },
    contact: { title: 'お問い合わせ', subtitle: 'プロジェクトのアイデアやコラボレーションをお考えですか？',
      name: 'お名前', email: 'メール', subject: '件名', message: 'メッセージ',
      send: 'メッセージを送信', sending: '送信中...', openingClient: 'メールクライアントを開いています...',
      connectWithMe: 'つながる', responseTime: '返信時間', responseTimeDesc: '通常24〜48時間以内にお返事します。',
      available: '新規プロジェクト受付中',
      socials: { email: 'メール', linkedin: 'LinkedIn', github: 'GitHub', twitter: 'Twitter' },
    },
    common: { unknown: '不明' },
  },
};

// Deep merge
function deepMerge(base, override) {
  if (typeof base !== 'object' || base === null || Array.isArray(base)) return override ?? base;
  var result = {};
  for (var key in base) result[key] = base[key];
  if (override) {
    for (var k in override) {
      if (base[k] && typeof base[k] === 'object' && !Array.isArray(base[k]) && override[k] && typeof override[k] === 'object' && !Array.isArray(override[k])) {
        result[k] = deepMerge(base[k], override[k]);
      } else if (override[k] !== undefined) {
        result[k] = override[k];
      }
    }
  }
  return result;
}

// Estado do idioma
var _currentLang = 'pt-br';
var _callbacks = [];

function detectInitialLanguage() {
  try {
    var stored = localStorage.getItem('portfolio-lang');
    if (stored && dictionaries[stored]) return stored;
  } catch(e) {}
  var browser = (navigator.language || 'pt-br').toLowerCase();
  if (browser.startsWith('pt')) return 'pt-br';
  if (browser.startsWith('en')) return 'en';
  if (browser.startsWith('es')) return 'es';
  if (browser === 'zh-cn' || browser === 'zh-hans') return 'zh-cn';
  if (browser.startsWith('zh')) return 'zh-tw';
  if (browser.startsWith('ja')) return 'ja';
  return 'pt-br';
}

function getDictionary(lang) {
  return deepMerge(ptBR, dictionaries[lang] || {});
}

function getText(path) {
  var dict = getDictionary(_currentLang);
  var parts = path.split('.');
  var val = dict;
  for (var i = 0; i < parts.length; i++) {
    if (val && typeof val === 'object' && parts[i] in val) val = val[parts[i]];
    else return path;
  }
  return typeof val === 'string' ? val : path;
}

function setLanguage(code) {
  if (!dictionaries[code]) return;
  _currentLang = code;
  try { localStorage.setItem('portfolio-lang', code); } catch(e) {}
  for (var i = 0; i < _callbacks.length; i++) _callbacks[i](code);
}

function getLanguage() { return _currentLang; }

function onLanguageChange(cb) { _callbacks.push(cb); }

// API pública
I18n.SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES;
I18n.detect = detectInitialLanguage;
I18n.t = getText;
I18n.setLang = setLanguage;
I18n.getLang = getLanguage;
I18n.onChange = onLanguageChange;
I18n.getDict = getDictionary;
