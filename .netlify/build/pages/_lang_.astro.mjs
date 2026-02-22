import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, e as renderScript, b as createAstro, s as spreadAttributes, u as unescapeHTML, r as renderComponent } from '../chunks/astro/server_cNgiisbL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BFBygG7C.mjs';
import { g as getLangFromUrl, l as languages, u as useTranslations, a as useTranslatedPath } from '../chunks/utils_Ce-Xz2lt.mjs';
import 'clsx';
import { $ as $$Projects } from '../chunks/projects_BIDFIcve.mjs';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
export { renderers } from '../renderers.mjs';

const profileImg = new Proxy({"src":"/_astro/profile.Cb_ihZgN.webp","width":498,"height":501,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/VisualStudio/Portfolio/src/assets/profile.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navbar;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const currentLangLabel = languages[lang];
  return renderTemplate`<!-- ===== DESKTOP NAVBAR ===== -->${maybeRenderHead()}<nav id="navbar" class="bg-primary-blur backdrop-blur-xs fixed w-full top-0 z-50 border-b border-text-primary/10"> <div class="container mx-auto flex flex-row justify-between items-center py-3 px-6"> <!-- Brand --> <a${addAttribute(`/${lang}`, "href")} class="font-fraunces text-base text-text-primary font-bold tracking-widest uppercase select-none">
José Montaño
</a> <!-- Desktop nav links --> <ul class="hidden md:flex flex-row items-center gap-8"> <li> <a${addAttribute(`/${lang}#projects`, "href")} class="nav-link font-jakarta text-xs font-semibold text-text-secondary uppercase tracking-widest hover:text-text-primary transition-colors duration-200 relative group"> ${t("nav.projects")} <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-text-primary transition-all duration-300 group-hover:w-full"></span> </a> </li> <li> <a${addAttribute(`/${lang}#technologies`, "href")} class="nav-link font-jakarta text-xs font-semibold text-text-secondary uppercase tracking-widest hover:text-text-primary transition-colors duration-200 relative group"> ${t("nav.technologies")} <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-text-primary transition-all duration-300 group-hover:w-full"></span> </a> </li> <li> <a${addAttribute(`/${lang}#about`, "href")} class="nav-link font-jakarta text-xs font-semibold text-text-secondary uppercase tracking-widest hover:text-text-primary transition-colors duration-200 relative group"> ${t("nav.about")} <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-text-primary transition-all duration-300 group-hover:w-full"></span> </a> </li> <li> <a${addAttribute(`/${lang}#contact`, "href")} class="nav-link font-jakarta text-xs font-semibold text-text-secondary uppercase tracking-widest hover:text-text-primary transition-colors duration-200 relative group"> ${t("nav.contact")} <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-text-primary transition-all duration-300 group-hover:w-full"></span> </a> </li> <!-- Desktop language dropdown --> <li class="relative" id="lang-dropdown-wrapper"> <button id="lang-dropdown-btn" class="flex items-center gap-1.5 font-jakarta text-xs font-semibold text-text-secondary uppercase tracking-widest hover:text-text-primary transition-colors duration-200 group cursor-pointer select-none" aria-haspopup="listbox" aria-expanded="false"> <!-- Globe icon --> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70 group-hover:opacity-100 transition-opacity"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path> <path d="M2 12h20"></path> </svg> <span id="lang-label">${currentLangLabel}</span> <!-- Chevron --> <svg id="lang-chevron" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200"> <path d="m6 9 6 6 6-6"></path> </svg> </button> <!-- Dropdown panel --> <ul id="lang-dropdown" role="listbox" class="absolute right-0 top-[calc(100%+10px)] min-w-[130px] bg-primary border border-text-primary/15 rounded-xl shadow-lg overflow-hidden opacity-0 scale-95 pointer-events-none transition-all duration-200 origin-top-right"> ${Object.entries(languages).map(([code, label]) => renderTemplate`<li role="option"> <a${addAttribute(translatePath("/", code), "href")}${addAttribute(`flex items-center gap-2 px-4 py-2.5 font-jakarta text-xs font-semibold uppercase tracking-widest transition-colors duration-150
                  ${code === lang ? "text-text-primary bg-text-primary/8" : "text-text-secondary hover:text-text-primary hover:bg-text-primary/5"}`, "class")}> ${code === lang && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="shrink-0"> <path d="M20.285 6.709a1 1 0 0 0-1.414 0L9 16.58l-4.871-4.871a1 1 0 0 0-1.414 1.414l5.578 5.578a1 1 0 0 0 1.414 0l10.578-10.578a1 1 0 0 0 0-1.414Z"></path> </svg>`} ${code !== lang && renderTemplate`<span class="w-[10px] shrink-0"></span>`} ${label} </a> </li>`)} </ul> </li> </ul> <!-- Mobile: hamburger button --> <button id="hamburger-btn" class="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-[60] relative cursor-pointer" aria-label="Toggle menu" aria-expanded="false"> <span id="bar1" class="block w-5 h-[1.5px] bg-text-primary transition-all duration-300 origin-center"></span> <span id="bar2" class="block w-5 h-[1.5px] bg-text-primary transition-all duration-300"></span> <span id="bar3" class="block w-5 h-[1.5px] bg-text-primary transition-all duration-300 origin-center"></span> </button> </div> </nav> <div id="mobile-menu" class="fixed inset-0 z-40 flex flex-col bg-primary opacity-0 pointer-events-none transition-opacity duration-300 md:hidden"> <ul class="flex flex-col items-center justify-center flex-1 gap-8"> <li> <a${addAttribute(`/${lang}#projects`, "href")} class="mobile-link font-jakarta text-2xl font-semibold text-text-primary uppercase tracking-widest hover:text-text-accent transition-colors duration-200"> ${t("nav.projects")} </a> </li> <li> <a${addAttribute(`/${lang}#technologies`, "href")} class="mobile-link font-jakarta text-2xl font-semibold text-text-primary uppercase tracking-widest hover:text-text-accent transition-colors duration-200"> ${t("nav.technologies")} </a> </li> <li> <a${addAttribute(`/${lang}#about`, "href")} class="mobile-link font-jakarta text-2xl font-semibold text-text-primary uppercase tracking-widest hover:text-text-accent transition-colors duration-200"> ${t("nav.about")} </a> </li> <li> <a${addAttribute(`/${lang}#contact`, "href")} class="mobile-link font-jakarta text-2xl font-semibold text-text-primary uppercase tracking-widest hover:text-text-accent transition-colors duration-200"> ${t("nav.contact")} </a> </li> <li class="flex items-center gap-3 mt-2"> ${Object.entries(languages).map(([code, label]) => renderTemplate`<a${addAttribute(translatePath("/", code), "href")}${addAttribute(`font-jakarta text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-200
            ${code === lang ? "bg-text-primary text-primary border-text-primary" : "bg-transparent text-text-secondary border-text-primary/30 hover:border-text-primary hover:text-text-primary"}`, "class")}> ${label} </a>`)} </li> </ul> </div> ${renderScript($$result, "C:/VisualStudio/Portfolio/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/VisualStudio/Portfolio/src/components/Navbar.astro", void 0);

const $$Astro$4 = createAstro();
const $$SkillsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SkillsCard;
  const { title, elements } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="bg-white w-full h-auto mb-9 py-7"> <h3 class="text-center font-jakarta font-bold text-5 mb-6.75">${title}</h3> <ul class="flex flex-col pl-14.25 text-left gap-5.5 text-4 text-text-secondary"> ${elements.map((item) => renderTemplate`<li>${item}</li>`)} </ul> </article>`;
}, "C:/VisualStudio/Portfolio/src/components/SkillsCard.astro", void 0);

const $$Astro$3 = createAstro();
const $$SkillInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkillInfo;
  const { title, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <h3 class="font-jakarta text-4 font-bold mb-3 text-text-primary">${title}</h3> <p class="text-text-secondary"> ${content} </p> </article>`;
}, "C:/VisualStudio/Portfolio/src/components/SkillInfo.astro", void 0);

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    iconDef,
    size = 20,
    color = "currentColor",
    class: className = "",
    ...rest
  } = Astro2.props;
  const rendered = icon(iconDef, {
    styles: { color, width: `${size}px`, height: `${size}px` }
  });
  const svgHtml = rendered.html[0];
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["inline-flex items-center justify-center", className], "class:list")}${spreadAttributes(rest)}>${unescapeHTML(svgHtml)}</span>`;
}, "C:/VisualStudio/Portfolio/src/components/Icon.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const footerTitle = t("footer.title");
  const footerDesc = t("footer.description");
  const footerBottom = t("footer.bottom");
  const socials = [
    { icon: faGithub, href: "https://github.com/JoyMoGas", label: "GitHub" },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/jos%C3%A9-monta%C3%B1o-gast%C3%A9lum-527426270/",
      label: "LinkedIn"
    },
    { icon: faInstagram, href: "https://www.instagram.com/josemogas.5", label: "Instagram" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary-blur backdrop-blur-xl w-full bottom-0 border-t border-text-primary/10 pt-6 px-6.5"> <article class="flex items-center justify-between mb-6"> <div> <h2 class="font-fraunces text-4-5 font-semibold text-text-primary"> ${footerTitle} </h2> <p class="font-jetbrains text-3 font-medium">${footerDesc}</p> </div> <div class="flex items-center gap-5"> ${socials.map(({ icon, href, label }) => renderTemplate`<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(label, "aria-label")} class="text-text-primary opacity-70 hover:opacity-100 transition-opacity duration-200"> ${renderComponent($$result, "Icon", $$Icon, { "iconDef": icon, "size": 32 })} </a>`)} </div> </article> <div class="text-center font-jakarta text-2-75 text-text-primary pb- pb-3-25"> ${footerBottom} </div> </footer>`;
}, "C:/VisualStudio/Portfolio/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({
    params: { lang }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const titleString = t("home.title");
  const availbaleButton = t("home.available");
  const introString = t("home.intro");
  const projectsString = t("projects.title");
  const arsenalTtitle = t("arsenal.title");
  const arsenalFront = t("arsenal.frontend");
  const arsenalBack = t("arsenal.backend");
  const arsenalTools = t("arsenal.tools");
  const aboutTitle = t("about.title");
  const aboutDescription = t("about.description");
  const softwareTitle = t("about.softwareTitle");
  const softwareContent = t("about.softwareContent");
  const systemsTitle = t("about.systemsTitle");
  const systemsContent = t("about.systemsContent");
  const securityTitle = t("about.securityTitle");
  const securityContent = t("about.securityContent");
  const optimizationTitle = t("about.optimizationTitle");
  const optimizationContent = t("about.optimizationContent");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="mt-18 mx-10"> <section> <div class="flex flex-col items-center align-middle content-center text-center"> <h1 class="font-fraunces font-bold text-text-primary text-8">${unescapeHTML(titleString)}</h1> <article class="flex flex-col items-center"> <img${addAttribute(profileImg.src, "src")} alt="Imagen del programador" class="w-80 rounded-full my-9.5"> <div class="bg-available border border-available-border rounded-full w-fit px-4 py-1.5"> <p class="font-jakarta text-text-accent font-semibold text-3-25">${unescapeHTML(availbaleButton)}</p> </div> <div class="my-9.5"> <p class="text-left text-4">${unescapeHTML(introString)}</p> </div> </article> </div> </section> <section class="flex flex-col items-center align-middle content-center text-center"> <h2 class="font-fraunces text-text-primary text-6 font-bold mb-9.5">${unescapeHTML(projectsString)}</h2> ${renderComponent($$result2, "Projects", $$Projects, {})} </section> <section class="flex flex-col items-center align-middle content-center text-center"> <h2 class="font-fraunces text-text-primary text-6 font-bold mb-9.5"> ${arsenalTtitle} </h2> ${renderComponent($$result2, "SkillsCard", $$SkillsCard, { "title": arsenalFront, "elements": ["React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Astro"] })} ${renderComponent($$result2, "SkillsCard", $$SkillsCard, { "title": arsenalBack, "elements": ["Python", "Flask", "DJango", "JWT", "PostgreSQL", "Supabase"] })} ${renderComponent($$result2, "SkillsCard", $$SkillsCard, { "title": arsenalTools, "elements": ["Vercel", "Git / Github", "Postman", "Web Scrapping", "VS Code", "Figma"] })} </section> <section class="flex flex-col items-center align-middle content-center text-center"> <h2 class="font-fraunces text-text-primary text-6 font-bold mb-9.5"> ${aboutTitle} </h2> <div> <p class="text-left text-4 text-text-secondary mb-9.5">${unescapeHTML(aboutDescription)}</p> </div> </section> <section class="grid grid-cols-2 gap-8.75 mb-15"> ${renderComponent($$result2, "SkillInfo", $$SkillInfo, { "title": softwareTitle, "content": softwareContent })} ${renderComponent($$result2, "SkillInfo", $$SkillInfo, { "title": systemsTitle, "content": systemsContent })} ${renderComponent($$result2, "SkillInfo", $$SkillInfo, { "title": securityTitle, "content": securityContent })} ${renderComponent($$result2, "SkillInfo", $$SkillInfo, { "title": optimizationTitle, "content": optimizationContent })} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/VisualStudio/Portfolio/src/pages/[lang]/index.astro", void 0);

const $$file = "C:/VisualStudio/Portfolio/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
