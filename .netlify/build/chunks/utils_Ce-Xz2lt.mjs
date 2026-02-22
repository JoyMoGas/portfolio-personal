const languages = {
  en: "English",
  es: "Español"
};
const defaultLang = "es";
const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
const ui = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.technologies": "Technologies",
    "nav.about": "About Me",
    "nav.contact": "Contact",
    "home.title": "Software Engineer & <br> Full Stack Developer",
    "home.subtitle": "Full Stack Developer",
    "home.cta": "View Projects",
    "home.available": "AVAILABLE TO WORK",
    "home.intro": "I'm <span class='font-bold text-text-accent'>José Montaño</span>, an engineer focused on bridging the gap between backend power and frontend interactivity. I'm an expert in designing robust systems with <span class='font-bold text-text-accent'>Python</span> and bringing them to life using <span class='font-bold text-text-accent'>React</span> architectures, delivering high-performance software for any device.",
    "projects.title": "SELECTED WORK",
    "projects.featured": "Featured Projects",
    "projects.all": "All Projects",
    "projects.viewDetails": "View Details",
    "projects.viewDemo": "Live Demo",
    "projects.viewCode": "View Code",
    "arsenal.title": "TECH ARSENAL",
    "arsenal.frontend": "Front-End",
    "arsenal.backend": "Back-End",
    "arsenal.tools": "Tools",
    "about.title": "ABOUT ME",
    "about.skills": "Skills",
    "about.experience": "Experience",
    "about.description": "Software Engineer focused on the design and construction of high-performance digital architectures. My methodology is based on integrating robust backend services with intuitive and dynamic user interfaces. With a mindset geared towards solving complex technical problems, I develop scalable solutions that transform business requirements into functional systems, always maintaining a standard of technical excellence and security.",
    "about.softwareTitle": "Software Engineering",
    "about.systemsTitle": "Scalable Systems",
    "about.securityTitle": "Security by Design",
    "about.optimizationTitle": "Performance Optimization",
    "about.softwareContent": "Development under industry standards and methodologies",
    "about.systemsContent": "Infrastructure prepared for growth and high demand",
    "about.securityContent": "Data and identity protection from the base architecture",
    "about.optimizationContent": "Efficient code designed for speed and stability",
    "contact.title": "Get in Touch",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "footer.title": "Let's build the future",
    "footer.description": "Full Stack Engineering designed between the mountains and the desert",
    "footer.bottom": `© ${currentYear} José Montaño`,
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.notFound": "Page not found"
  },
  es: {
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.technologies": "Tecnologías",
    "nav.about": "Sobre Mí",
    "nav.contact": "Contacto",
    "home.intro": "Soy <span class='font-bold text-text-accent'>José Montaño</span>, Ingeniero enfocado en construir el puente entre la potencia del backend y la interactividad del frontend. Experto en diseñar sistemas robustos con <span class='font-bold text-text-accent'>Python</span> y darles vida mediante arquitecturas <span class='font-bold text-text-accent'>React</span>, entregando software de alto rendimiento para cualquier dispositivo.",
    "home.title": "Software Engineer & <br> Full Stack Developer",
    "home.subtitle": "Desarrollador Full Stack",
    "home.cta": "Ver Proyectos",
    "home.available": "DISPONIBLE PARA TRABAJAR",
    "projects.title": "TRABAJO SELECCIONADO",
    "projects.featured": "Proyectos Destacados",
    "projects.all": "Todos los Proyectos",
    "projects.viewDetails": "Ver Detalles",
    "projects.viewDemo": "Demo en Vivo",
    "projects.viewCode": "Ver Código",
    "arsenal.title": "ARSENAL TECNOLÓGICO",
    "arsenal.frontend": "Front-End",
    "arsenal.backend": "Back-End",
    "arsenal.tools": "Herramientas",
    "about.title": "SOBRE MÍ",
    "about.skills": "Habilidades",
    "about.experience": "Experiencia",
    "about.description": "Ingeniero de Software enfocado en el diseño y construcción de arquitecturas digitales de alto rendimiento. Mi metodología se basa en la integración de servicios de backend robustos con interfaces de usuario intuitivas y dinámicas. Con una mentalidad orientada a la resolución de problemas técnicos complejos, desarrollo soluciones escalables que transforman requisitos de negocio en sistemas funcionales, manteniendo siempre un estándar de excelencia técnica y seguridad.",
    "about.softwareTitle": "Ingeniería de Software",
    "about.systemsTitle": "Sistemas Escalables",
    "about.securityTitle": "Seguridad por Diseño",
    "about.optimizationTitle": "Optimización de Rendimiento",
    "about.softwareContent": "Desarrollo bajo estándares y metodologías de industria",
    "about.systemsContent": "Infraestructura preparada para el crecimiento y alta demanda",
    "about.securityContent": "Protección de datos e identidad desde la arquitectura base",
    "about.optimizationContent": "Código eficiente diseñado para la velocidad y estabilidad",
    "contact.title": "Contáctame",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "footer.title": "Construyamos el futuro",
    "footer.description": "Ingeniería Full Stack diseñada entre la sierra y el desierto",
    "footer.bottom": `© ${currentYear} José Montaño`,
    "common.loading": "Cargando...",
    "common.error": "Algo salió mal",
    "common.notFound": "Página no encontrada"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    return `/${l}${path}`;
  };
}
function getProjectUrl(slug, lang) {
  const translatePath = useTranslatedPath(lang);
  return translatePath(`/projects/${slug}`);
}

export { useTranslatedPath as a, getProjectUrl as b, getLangFromUrl as g, languages as l, useTranslations as u };
