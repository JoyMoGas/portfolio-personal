import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_cNgiisbL.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/VisualStudio/Portfolio/","cacheDir":"file:///C:/VisualStudio/Portfolio/node_modules/.astro/","outDir":"file:///C:/VisualStudio/Portfolio/dist/","srcDir":"file:///C:/VisualStudio/Portfolio/src/","publicDir":"file:///C:/VisualStudio/Portfolio/public/","buildClientDir":"file:///C:/VisualStudio/Portfolio/dist/","buildServerDir":"file:///C:/VisualStudio/Portfolio/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dbb3kofz.css"}],"routeData":{"route":"/hello","isIndex":false,"type":"page","pattern":"^\\/hello\\/?$","segments":[[{"content":"hello","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hello.astro","pathname":"/hello","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dbb3kofz.css"},{"type":"inline","content":"/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */.back-link[data-astro-cid-7s4v773p]{font-family:var(--font-jakarta,sans-serif);color:var(--color-text-secondary,#626262);margin-bottom:24px;font-size:14px;text-decoration:none;transition:color .2s;display:inline-block}.back-link[data-astro-cid-7s4v773p]:hover{color:var(--color-text-primary,#3d3d3d)}.project-header[data-astro-cid-7s4v773p]{margin-bottom:40px}.project-title[data-astro-cid-7s4v773p]{font-family:var(--font-fraunces,serif);color:var(--color-text-primary,#3d3d3d);margin-bottom:12px;font-size:36px;font-weight:700;line-height:1.2}.project-desc[data-astro-cid-7s4v773p]{font-family:var(--font-jakarta,sans-serif);color:var(--color-text-secondary,#626262);margin-bottom:24px;font-size:16px;line-height:1.65}.project-image[data-astro-cid-7s4v773p]{aspect-ratio:16/9;object-fit:cover;border-radius:12px;width:100%;margin-bottom:24px}.tech-tags[data-astro-cid-7s4v773p]{flex-wrap:wrap;gap:8px;margin-bottom:24px;display:flex}.tech-tag[data-astro-cid-7s4v773p]{border:1.5px solid var(--color-text-primary,#3d3d3d);font-family:var(--font-jetbrains,monospace);color:var(--color-text-primary,#3d3d3d);border-radius:999px;padding:5px 14px;font-size:12px;font-weight:500}.project-links[data-astro-cid-7s4v773p]{gap:12px;display:flex}.link-btn[data-astro-cid-7s4v773p]{font-family:var(--font-jetbrains,monospace);letter-spacing:.04em;border-radius:999px;align-items:center;gap:8px;padding:10px 20px;font-size:13px;font-weight:700;text-decoration:none;transition:opacity .2s,transform .15s;display:inline-flex}.link-btn[data-astro-cid-7s4v773p]:hover{opacity:.85;transform:translateY(-1px)}.link-github[data-astro-cid-7s4v773p]{background:var(--color-buttons,#3d3d3d);color:var(--color-text-buttons,#f4f1ea)}.link-demo[data-astro-cid-7s4v773p]{color:var(--color-text-primary,#3d3d3d);border:1.5px solid var(--color-text-primary,#3d3d3d);background:0 0}.prose-content[data-astro-cid-7s4v773p] h1{font-family:var(--font-fraunces,serif);color:var(--color-text-primary,#3d3d3d);margin-top:32px;margin-bottom:16px;font-size:28px;font-weight:700}.prose-content[data-astro-cid-7s4v773p] h2{font-family:var(--font-fraunces,serif);color:var(--color-text-primary,#3d3d3d);margin-top:24px;margin-bottom:12px;font-size:22px;font-weight:600}.prose-content[data-astro-cid-7s4v773p] p{font-family:var(--font-jakarta,sans-serif);color:var(--color-text-secondary,#626262);margin-bottom:16px;font-size:15px;line-height:1.7}.prose-content[data-astro-cid-7s4v773p] ul{margin-bottom:16px;padding-left:24px;list-style:outside}.prose-content[data-astro-cid-7s4v773p] li{font-family:var(--font-jakarta,sans-serif);color:var(--color-text-secondary,#626262);margin-bottom:6px;font-size:15px;line-height:1.65}.prose-content[data-astro-cid-7s4v773p] code{font-family:var(--font-jetbrains,monospace);background:#f0ece4;border-radius:4px;padding:2px 6px;font-size:13px}\n"}],"routeData":{"route":"/[lang]/projects/[slug]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/projects\\/([^/]+?)\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["lang","slug"],"component":"src/pages/[lang]/projects/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".project-card[data-astro-cid-mspuyifq]{display:block;text-decoration:none;color:inherit;border:1.5px solid #e2ddd6;border-radius:16px;overflow:hidden;background:var(--color-secondary, #ffffff);transition:box-shadow .25s ease,transform .25s ease;cursor:pointer;width:100%}.project-card[data-astro-cid-mspuyifq]:hover{box-shadow:0 8px 32px #3d3d3d21;transform:translateY(-4px)}.card-image-wrapper[data-astro-cid-mspuyifq]{position:relative;width:100%;aspect-ratio:16 / 9;overflow:hidden;background:#d0ccc6}.card-image[data-astro-cid-mspuyifq]{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s ease}.project-card[data-astro-cid-mspuyifq]:hover .card-image[data-astro-cid-mspuyifq]{transform:scale(1.04)}.card-image-placeholder[data-astro-cid-mspuyifq]{width:100%;height:100%;background:linear-gradient(135deg,#d0ccc6,#b8b3ac)}.card-overlay-buttons[data-astro-cid-mspuyifq]{position:absolute;top:12px;left:12px;display:flex;gap:8px;z-index:2}.card-btn[data-astro-cid-mspuyifq]{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;font-family:var(--font-jetbrains, monospace);font-size:11px;font-weight:700;letter-spacing:.06em;cursor:pointer;user-select:none;transition:opacity .2s ease,transform .15s ease;line-height:1}.card-btn[data-astro-cid-mspuyifq]:hover{opacity:.85;transform:scale(1.05)}.card-btn-github[data-astro-cid-mspuyifq],.card-btn-demo[data-astro-cid-mspuyifq]{background:var(--color-buttons, #3d3d3d);color:var(--color-text-buttons, #f4f1ea)}.card-tags[data-astro-cid-mspuyifq]{display:flex;flex-wrap:wrap;gap:8px;padding:14px 16px 0}.card-tag[data-astro-cid-mspuyifq]{padding:5px 14px;border:1.5px solid var(--color-text-primary, #3d3d3d);border-radius:999px;font-family:var(--font-jetbrains, monospace);font-size:11px;font-weight:500;color:var(--color-text-primary, #3d3d3d);background:transparent;letter-spacing:.02em;white-space:nowrap}.card-description[data-astro-cid-mspuyifq]{padding:12px 16px 0;font-family:var(--font-jakarta, sans-serif);font-size:13px;line-height:1.65;color:var(--color-text-secondary, #626262);text-align:left;margin:0}.card-title[data-astro-cid-mspuyifq]{padding:10px 16px 18px;font-family:var(--font-fraunces, serif);font-size:22px;font-weight:700;color:var(--color-text-primary, #3d3d3d);text-align:left;margin:0;line-height:1.2}.projects-grid[data-astro-cid-mtgvrxdn]{display:grid;grid-template-columns:1fr;gap:24px;width:100%;max-width:480px;margin:0 auto}\n"}],"routeData":{"route":"/[lang]/projects","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/projects\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/projects.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dbb3kofz.css"},{"type":"inline","content":".project-card[data-astro-cid-mspuyifq]{display:block;text-decoration:none;color:inherit;border:1.5px solid #e2ddd6;border-radius:16px;overflow:hidden;background:var(--color-secondary, #ffffff);transition:box-shadow .25s ease,transform .25s ease;cursor:pointer;width:100%}.project-card[data-astro-cid-mspuyifq]:hover{box-shadow:0 8px 32px #3d3d3d21;transform:translateY(-4px)}.card-image-wrapper[data-astro-cid-mspuyifq]{position:relative;width:100%;aspect-ratio:16 / 9;overflow:hidden;background:#d0ccc6}.card-image[data-astro-cid-mspuyifq]{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s ease}.project-card[data-astro-cid-mspuyifq]:hover .card-image[data-astro-cid-mspuyifq]{transform:scale(1.04)}.card-image-placeholder[data-astro-cid-mspuyifq]{width:100%;height:100%;background:linear-gradient(135deg,#d0ccc6,#b8b3ac)}.card-overlay-buttons[data-astro-cid-mspuyifq]{position:absolute;top:12px;left:12px;display:flex;gap:8px;z-index:2}.card-btn[data-astro-cid-mspuyifq]{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;font-family:var(--font-jetbrains, monospace);font-size:11px;font-weight:700;letter-spacing:.06em;cursor:pointer;user-select:none;transition:opacity .2s ease,transform .15s ease;line-height:1}.card-btn[data-astro-cid-mspuyifq]:hover{opacity:.85;transform:scale(1.05)}.card-btn-github[data-astro-cid-mspuyifq],.card-btn-demo[data-astro-cid-mspuyifq]{background:var(--color-buttons, #3d3d3d);color:var(--color-text-buttons, #f4f1ea)}.card-tags[data-astro-cid-mspuyifq]{display:flex;flex-wrap:wrap;gap:8px;padding:14px 16px 0}.card-tag[data-astro-cid-mspuyifq]{padding:5px 14px;border:1.5px solid var(--color-text-primary, #3d3d3d);border-radius:999px;font-family:var(--font-jetbrains, monospace);font-size:11px;font-weight:500;color:var(--color-text-primary, #3d3d3d);background:transparent;letter-spacing:.02em;white-space:nowrap}.card-description[data-astro-cid-mspuyifq]{padding:12px 16px 0;font-family:var(--font-jakarta, sans-serif);font-size:13px;line-height:1.65;color:var(--color-text-secondary, #626262);text-align:left;margin:0}.card-title[data-astro-cid-mspuyifq]{padding:10px 16px 18px;font-family:var(--font-fraunces, serif);font-size:22px;font-weight:700;color:var(--color-text-primary, #3d3d3d);text-align:left;margin:0;line-height:1.2}.projects-grid[data-astro-cid-mtgvrxdn]{display:grid;grid-template-columns:1fr;gap:24px;width:100%;max-width:480px;margin:0 auto}\n"}],"routeData":{"route":"/[lang]","isIndex":true,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/VisualStudio/Portfolio/src/pages/[lang]/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/VisualStudio/Portfolio/src/pages/[lang]/projects/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/VisualStudio/Portfolio/src/pages/hello.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/VisualStudio/Portfolio/src/pages/[lang]/projects.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/projects/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/hello@_@astro":"pages/hello.astro.mjs","\u0000@astro-page:src/pages/[lang]/projects/[slug]@_@astro":"pages/_lang_/projects/_slug_.astro.mjs","\u0000@astro-page:src/pages/[lang]/projects@_@astro":"pages/_lang_/projects.astro.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_N7x-_5Gi.mjs","C:/VisualStudio/Portfolio/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:\\VisualStudio\\Portfolio\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","\u0000astro:assets":"chunks/_astro_assets_DMlsWius.mjs","C:\\VisualStudio\\Portfolio\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CPrZ89jP.mjs","C:/VisualStudio/Portfolio/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.Cm1a8qy6.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/VisualStudio/Portfolio/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"hamburger-btn\"),t=document.getElementById(\"mobile-menu\"),c=document.getElementById(\"bar1\"),d=document.getElementById(\"bar2\"),l=document.getElementById(\"bar3\");let s=!1;function u(){s=!0,t.classList.remove(\"opacity-0\",\"pointer-events-none\"),t.classList.add(\"opacity-100\"),a.setAttribute(\"aria-expanded\",\"true\"),c.style.transform=\"translateY(6.5px) rotate(45deg)\",d.style.opacity=\"0\",l.style.transform=\"translateY(-6.5px) rotate(-45deg)\",document.body.style.overflow=\"hidden\"}function i(){s=!1,t.classList.remove(\"opacity-100\"),t.classList.add(\"opacity-0\",\"pointer-events-none\"),a.setAttribute(\"aria-expanded\",\"false\"),c.style.transform=\"\",d.style.opacity=\"\",l.style.transform=\"\",document.body.style.overflow=\"\"}a.addEventListener(\"click\",()=>s?i():u());document.querySelectorAll(\".mobile-link\").forEach(e=>e.addEventListener(\"click\",i));const r=document.getElementById(\"lang-dropdown-btn\"),n=document.getElementById(\"lang-dropdown\"),m=document.getElementById(\"lang-chevron\");let o=!1;function y(){o=!0,n.classList.remove(\"opacity-0\",\"scale-95\",\"pointer-events-none\"),n.classList.add(\"opacity-100\",\"scale-100\"),m.style.transform=\"rotate(180deg)\",r.setAttribute(\"aria-expanded\",\"true\")}function p(){o=!1,n.classList.remove(\"opacity-100\",\"scale-100\"),n.classList.add(\"opacity-0\",\"scale-95\",\"pointer-events-none\"),m.style.transform=\"\",r.setAttribute(\"aria-expanded\",\"false\")}r.addEventListener(\"click\",e=>{e.stopPropagation(),o?p():y()});document.addEventListener(\"click\",e=>{o&&!document.getElementById(\"lang-dropdown-wrapper\").contains(e.target)&&p()});"]],"assets":["/_astro/profile.Cb_ihZgN.webp","/_astro/index.Dbb3kofz.css","/favicon.ico","/favicon.svg","/projects/image.png"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always","locales":["en","es"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"z+S/aAAb1WkjDETGMX2ThNF4qpcLVnBu1bEoNBCDbs8=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
