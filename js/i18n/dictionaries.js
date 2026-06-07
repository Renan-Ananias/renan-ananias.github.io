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

export const SUPPORTED_LANGUAGES = [
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

export function getDictionary(lang) {
  return deepMerge(ptBR, dictionaries[lang] || {});
}

export function detectInitialLanguage() {
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
