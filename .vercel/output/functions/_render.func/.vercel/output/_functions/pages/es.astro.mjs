import { c as createComponent, r as renderTemplate, b as renderComponent, a as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Cg9wc-Ri.mjs';
import { $ as $$Layout } from '../chunks/Layout_w8K0bLl0.mjs';
import { g as getLangFromUrl, $ as $$Proyects, u as useTranslations } from '../chunks/Proyects_dRO1miMD.mjs';
import { $ as $$Logos } from '../chunks/Logos_BTPJxswC.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate(_a || (_a = __template(["", '  <script>\n	// Lee el tema desde localStorage y aplica la clase correspondiente\n    document.addEventListener("DOMContentLoaded", () => {\n        const savedTheme = localStorage.getItem("theme");\n        console.log("me haz jodido la vida");\n        if (savedTheme) { \n            document.documentElement.classList.toggle("dark", savedTheme === "dark");\n        }\n    });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Acerca de mi", "data-astro-cid-7pewbour": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-7pewbour> <h1 class="text-gradient mt-12" id="aboutMe" data-astro-cid-7pewbour>${t("nav.aboutMe")}</h1> <p class="dark:text-slate-200 text-gray-800" data-astro-cid-7pewbour> ${t("text.aboutMe")} <br data-astro-cid-7pewbour> ${t("text.aboutMe2")} <br data-astro-cid-7pewbour> ${t("text.aboutMe3")} </p> <h1 class=" text-gradient mt-12" id="skills" data-astro-cid-7pewbour>${t("nav.skills")}</h1> ${renderComponent($$result2, "Logos", $$Logos, { "data-astro-cid-7pewbour": true })} <h1 class="text-gradient mt-12" id="proyects" data-astro-cid-7pewbour>${t("nav.proyects")}</h1> ${renderComponent($$result2, "Proyects", $$Proyects, { "data-astro-cid-7pewbour": true })} </main> ` }));
}, "C:/Users/issac/Documents/foking portafolio/Portfolio/src/pages/es/index.astro", void 0);

const $$file = "C:/Users/issac/Documents/foking portafolio/Portfolio/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
