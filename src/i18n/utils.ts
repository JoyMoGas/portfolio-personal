import { ui, defaultLang, showDefaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

// Helper to get projects by language
export function getProjectSlug(filename: string, lang: string) {
  // Removes language prefix and .md extension
  return filename.replace(`${lang}/`, "").replace(".md", "");
}

// Helper to generate project detail URL
export function getProjectUrl(slug: string, lang: string) {
  const translatePath = useTranslatedPath(lang as keyof typeof ui);
  return translatePath(`/projects/${slug}`);
}
