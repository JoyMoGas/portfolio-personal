import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_cNgiisbL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BFBygG7C.mjs';
export { renderers } from '../renderers.mjs';

const $$Hello = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Hello World</h1> ` })}`;
}, "C:/VisualStudio/Portfolio/src/pages/hello.astro", void 0);

const $$file = "C:/VisualStudio/Portfolio/src/pages/hello.astro";
const $$url = "/hello";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Hello,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
