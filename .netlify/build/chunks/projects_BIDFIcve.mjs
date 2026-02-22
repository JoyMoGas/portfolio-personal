import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro, r as renderComponent } from './astro/server_cNgiisbL.mjs';
import 'piccolore';
import { g as getCollection } from './_astro_content_qWBy_p8W.mjs';
import { b as getProjectUrl, g as getLangFromUrl } from './utils_Ce-Xz2lt.mjs';
import 'clsx';
/* empty css                            */

const $$Astro$1 = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project, lang } = Astro2.props;
  const { title, description, image, technologies, github, demo } = project.data;
  const slug = project.slug.split("/").pop() || "";
  const projectUrl = getProjectUrl(slug, lang);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(projectUrl, "href")} class="project-card"${addAttribute(`Ver proyecto ${title}`, "aria-label")} data-astro-cid-mspuyifq> <!-- Image Banner with overlaid buttons --> <div class="card-image-wrapper" data-astro-cid-mspuyifq> ${image ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="card-image" data-astro-cid-mspuyifq>` : renderTemplate`<div class="card-image-placeholder" data-astro-cid-mspuyifq></div>`} <!-- Overlay buttons at the top of the image --> <div class="card-overlay-buttons" data-astro-cid-mspuyifq> ${github && renderTemplate`<span class="card-btn card-btn-github"${addAttribute(`event.preventDefault(); event.stopPropagation(); window.open('${github}', '_blank')`, "onclick")} data-astro-cid-mspuyifq> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-mspuyifq> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-astro-cid-mspuyifq></path> </svg>
GITHUB
</span>`} ${demo && renderTemplate`<span class="card-btn card-btn-demo"${addAttribute(`event.preventDefault(); event.stopPropagation(); window.open('${demo}', '_blank')`, "onclick")} data-astro-cid-mspuyifq> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mspuyifq> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-mspuyifq></path> <polyline points="15 3 21 3 21 9" data-astro-cid-mspuyifq></polyline> <line x1="10" y1="14" x2="21" y2="3" data-astro-cid-mspuyifq></line> </svg>
DEMO
</span>`} </div> </div> <!-- Tech tags --> <div class="card-tags" data-astro-cid-mspuyifq> ${technologies.map((tech) => renderTemplate`<span class="card-tag" data-astro-cid-mspuyifq>${tech}</span>`)} </div> <!-- Description --> <p class="card-description" data-astro-cid-mspuyifq>${description}</p> <!-- Title --> <h3 class="card-title" data-astro-cid-mspuyifq>${title}</h3> </a> `;
}, "C:/VisualStudio/Portfolio/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const lang = getLangFromUrl(Astro2.url);
  const allProjects = await getCollection("projects", ({ data }) => {
    return data.lang === lang;
  });
  const sortedProjects = allProjects.sort((a, b) => a.data.order - b.data.order);
  return renderTemplate`${maybeRenderHead()}<div class="projects-grid" data-astro-cid-mtgvrxdn> ${sortedProjects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project, "lang": lang, "data-astro-cid-mtgvrxdn": true })}`)} </div> `;
}, "C:/VisualStudio/Portfolio/src/pages/[lang]/projects.astro", void 0);

const $$file = "C:/VisualStudio/Portfolio/src/pages/[lang]/projects.astro";
const $$url = "/[lang]/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Projects as $, _page as _ };
