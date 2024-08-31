import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as createAstro, b as renderComponent, f as createTransitionScope, g as renderHead } from './astro/server_Cg9wc-Ri.mjs';
import { $ as $$Image } from './_astro_assets_gEeVJ29o.mjs';
import 'clsx';
import { g as getLangFromUrl, u as useTranslations } from './Proyects_dRO1miMD.mjs';
/* empty css                         */

const profileImage = "/perfil.jfif";

const $$Astro$3 = createAstro();
const $$HeaderButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  return renderTemplate`${maybeRenderHead()}<a class="flex items-center justify-center w-full gap-1 px-5 py-4 text-gray-900 dark:text-white text-base duration-300 md:w-auto md:py-2 md:text-sm hover:scale-110 hover:text-gray-900 dark:hover:text-white hover:font-bold "${addAttribute(Astro2.props.href || void 0, "href")}> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "C:/Users/issac/Documents/foking portafolio/Portfolio/src/layouts/components/HeaderButton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate(_a || (_a = __template(["", '<div class="flex justify-center mb-6" data-astro-cid-mjynwyun> <header class="fixed " data-astro-cid-mjynwyun> <nav class=" mx-auto p-4 w-[800px] flex gap-4 items-center justify-between py-3 bg-black-custom h-[60px] bg-slate-200 dark:bg-black-custom" data-astro-cid-mjynwyun> <div data-astro-cid-mjynwyun> <a class="p-3" data-astro-cid-mjynwyun> ', ' </a> </div> <div class="flex items-center" data-astro-cid-mjynwyun> ', ' <a href="https://github.com/issac-326" data-astro-cid-mjynwyun> <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current dark:text-gray-300 text-gray-800 w-5 h-5" data-astro-cid-mjynwyun><title>GitHub</title><path class="highlight-on-hover" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" data-astro-cid-mjynwyun></path></svg> </a> <button id="CambioDeColor" class="ml-2" data-astro-cid-mjynwyun', '> <svg width="30px" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" data-astro-cid-mjynwyun> <path class="sun w-5 h-5 " fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-mjynwyun></path> <path class="moon w-5 h-5" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-mjynwyun></path> </svg> </button> </div> </nav> <div class="fixed top-3 w-auto max-w-full left-1/2 -translate-x-1/2 z-[999] border border-gray-600 rounded-full text-gray-200 flex text-sm h-[44px] items-center " data-astro-cid-mjynwyun> ', " ", " ", ' </div> </header> </div>  <script>\n\n    // Lee el tema desde localStorage y aplica la clase correspondiente\n    document.addEventListener("DOMContentLoaded", () => {\n        const savedTheme = localStorage.getItem("theme");\n        console.log("me haz jodido la vida");\n        if (savedTheme) { \n            document.documentElement.classList.toggle("dark", savedTheme === "dark");\n        }\n    });\n\n    // Manejar el cambio de tema al hacer clic en el bot\xF3n\n    document.getElementById("CambioDeColor").addEventListener("click", () => {\n        const theme = document.documentElement.classList.toggle("dark") ? "dark" : "light";\n        localStorage.setItem("theme", theme);\n    });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": profileImage, "alt": "Perfil", "width": 30, "height": 30, "class": "rounded-full w-11 dark:border-white border-gray-800 h-[45px] w-[45px] border-2 shadow-lg", "data-astro-cid-mjynwyun": true }), renderComponent($$result, "HeaderButton", $$HeaderButton, { "slot": "after", "href": `${t("nav.url")}`, "data-astro-cid-mjynwyun": true }, { "default": ($$result2) => renderTemplate` <img alt="Idioma" loading="lazy" width="30" height="25" decoding="async" data-nimg="1" class="mr-4 text-white" style="color:transparent"${addAttribute(`${t("nav.img")}`, "src")} data-astro-cid-mjynwyun> <p class="text-gray-800 dark:text-gray-100" data-astro-cid-mjynwyun>${t("nav.nam")}</p> ` }), addAttribute(createTransitionScope($$result, "by2xlmlz"), "data-astro-transition-persist"), renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "ml-4 nav-button", "id": "about", "href": `/${lang}/#aboutMe`, "data-astro-cid-mjynwyun": true }, { "default": ($$result2) => renderTemplate`${t("nav.aboutMe")}` }), renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "nav-button", "id": "skill", "href": `/${lang}/#skills`, "data-astro-cid-mjynwyun": true }, { "default": ($$result2) => renderTemplate`${t("nav.skills")}` }), renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "nav-button", "id": "proyect", "href": `/${lang}/#proyects`, "data-astro-cid-mjynwyun": true }, { "default": ($$result2) => renderTemplate`${t("nav.proyects")}` }));
}, "C:/Users/issac/Documents/foking portafolio/Portfolio/src/layouts/components/Header.astro", "self");

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/issac/Documents/foking portafolio/Portfolio/node_modules/.pnpm/astro@4.15.1_@types+node@22.5.1_rollup@4.21.2_sass@1.77.8_terser@5.31.6_typescript@5.5.4/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-slate-200 dark:bg-black-custom dark:text-gray-100"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/issac/Documents/foking portafolio/Portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
