import { c as createComponent, d as addAttribute, f as renderHead, g as renderSlot, a as renderTemplate, b as createAstro } from './astro/server_cNgiisbL.mjs';
import 'piccolore';
import 'clsx';
import { g as getLangFromUrl } from './utils_Ce-Xz2lt.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`<html${addAttribute(lang, "lang")} data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>José Montaño | Full Stack Developer Portfolio</title>${renderHead()}</head> <body class="bg-primary" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/VisualStudio/Portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
