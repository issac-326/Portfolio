import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, a as createAstro, d as addAttribute } from './astro/server_Cg9wc-Ri.mjs';
import { $ as $$Image } from './_astro_assets_gEeVJ29o.mjs';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight flex justify-center",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("text-sm p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const defaultLang = "es";
const ui = {
  en: {
    "nav.aboutMe": "About me",
    "nav.img": "https://flagcdn.com/us.svg",
    "nav.nam": "EN",
    "nav.url": "/es",
    "nav.skills": "Skills",
    "nav.proyects": "Proyects",
    "text.aboutMe": `I've always been fascinated by computers. Understanding how programs work and why they behave as they do has kept my curiosity alive, and this passion led me to pursue a degree in computer engineering.`,
    "text.aboutMe2": "I consider myself an enthusiastic learner in the field of computer science, always eager to explore new areas. I have the ability to create and collaborate within a team, and I continuously strive to improve myself while keeping an open mind to the latest professional trends.",
    "text.aboutMe3": "Outside of studying and programming, I spend my free time reading books, learning new skills, and playing video games."
  },
  es: {
    "nav.aboutMe": "Sobre mi",
    "nav.url": "/en",
    "nav.img": "https://flagcdn.com/mx.svg",
    "nav.nam": "ES",
    "nav.skills": "Habilidades",
    "nav.proyects": "Proyectos",
    "text.aboutMe": `Desde siempre, la fascinación por las computadoras ha sido una constante en mi vida. El funcionamiento de los programas y el porqué de sus acciones han alimentado mi curiosidad, y es esta pasión la que me llevó a estudiar ingeniería en sistemas.`,
    "text.aboutMe2": "Me considero un entusiasta de la informática, siempre dispuesto a aprender y explorar nuevas áreas del campo. Tengo la habilidad de crear y colaborar en equipo, y busco superarme constantemente mientras mantengo una mente abierta a las últimas tendencias profesionales.",
    "text.aboutMe3": "Fuera del estudio y la programación, disfruto de mi tiempo libre leyendo libros, aprendiendo nuevas habilidades y jugando videojuegos."
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

const $$Astro = createAstro();
const $$Proyects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyects;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-3 gap-5"> ${renderComponent($$result, "Card", Card, { "className": "overflow-hidden shadow-lg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "width": 300, "height": 300, "src": "/portfolio.png", "alt": "" })} ${renderComponent($$result2, "CardHeader", CardHeader, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", CardTitle, {}, { "default": ($$result4) => renderTemplate`Portafolio` })} ` })} ${renderComponent($$result2, "CardContent", CardContent, {}, { "default": ($$result3) => renderTemplate`
Portafolio personal para ver mis proyectos y habilidades en desarrollo web.
` })} ${renderComponent($$result2, "CardFooter", CardFooter, { "className": "flex flex-col gap-6 items-start" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-row gap-2 flex-wrap"> ${renderComponent($$result3, "Badge", Badge, { "className": "bg-[#8A2BE2] text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`React` })} ${renderComponent($$result3, "Badge", Badge, { "className": "bg-[#8A2BE2] text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`Typescript` })} ${renderComponent($$result3, "Badge", Badge, { "className": "bg-[#8A2BE2] text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`Astro` })} ${renderComponent($$result3, "Badge", Badge, { "className": "bg-[#8A2BE2] text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`Tailwind` })} </div> <div class="flex gap-6"> <a href="https://github.com/issac-326/Portfolio" target="_blank"> ${renderComponent($$result3, "Button", Button, { "variant": "default", "aria-label": "github repository" }, { "default": ($$result4) => renderTemplate`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-300 dark:text-gray-800 w-5 h-5"><title>GitHub</title><path class="highlight-on-hover" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>` })} </a> <a${addAttribute(`/${lang}/#aboutMe`, "href")}> ${renderComponent($$result3, "Button", Button, { "aria-label": "internal a" }, { "default": ($$result4) => renderTemplate`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-300 dark:text-gray-800 w-5 h-5"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>` })} </a> </div> ` })} ` })} ${renderComponent($$result, "Card", Card, { "className": "overflow-hidden" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "width": 300, "height": 300, "src": "/portfolio.png", "alt": "" })} ${renderComponent($$result2, "CardHeader", CardHeader, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", CardTitle, {}, { "default": ($$result4) => renderTemplate`Portafolio` })} ` })} ${renderComponent($$result2, "CardContent", CardContent, {}, { "default": ($$result3) => renderTemplate`
esta bonito
` })} ${renderComponent($$result2, "CardFooter", CardFooter, { "className": "flex flex-col gap-6 items-start" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-row gap-2 flex-wrap"> ${renderComponent($$result3, "Badge", Badge, { "className": "bg-blue-500 text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`React` })} ${renderComponent($$result3, "Badge", Badge, { "className": "bg-blue-500 text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`Typescript` })} ${renderComponent($$result3, "Badge", Badge, { "className": "bg-blue-500 text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`Astro` })} ${renderComponent($$result3, "Badge", Badge, { "className": "bg-blue-500 text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`Tailwind` })} </div> <div class="flex gap-6"> <a href="https://github.com/issac-326/Portfolio" target="_blank"> ${renderComponent($$result3, "Button", Button, { "variant": "default", "aria-label": "github repository" }, { "default": ($$result4) => renderTemplate`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-300 dark:text-gray-800 w-5 h-5"><title>GitHub</title><path class="highlight-on-hover" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>` })} </a> <a${addAttribute(`/${lang}/#aboutMe`, "href")}> ${renderComponent($$result3, "Button", Button, { "aria-label": "internal a" }, { "default": ($$result4) => renderTemplate`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-300 dark:text-gray-800 w-5 h-5"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>` })} </a> </div> ` })} ` })} ${renderComponent($$result, "Card", Card, { "className": "overflow-hidden" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "class": "w-full", "width": 300, "height": 300, "src": "/portfolio.png", "alt": "" })} ${renderComponent($$result2, "CardHeader", CardHeader, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", CardTitle, {}, { "default": ($$result4) => renderTemplate`Portafolio` })} ` })} ${renderComponent($$result2, "CardContent", CardContent, {}, { "default": ($$result3) => renderTemplate`
esta bonito
` })} ${renderComponent($$result2, "CardFooter", CardFooter, { "className": "flex flex-col gap-6 items-start" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-row gap-2 flex-wrap"> ${renderComponent($$result3, "Badge", Badge, { "className": "bg-blue-500 text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`React` })} ${renderComponent($$result3, "Badge", Badge, { "className": "bg-blue-500 text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`Typescript` })} ${renderComponent($$result3, "Badge", Badge, { "className": "bg-blue-500 text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`Astro` })} ${renderComponent($$result3, "Badge", Badge, { "className": "bg-blue-500 text-white", "variant": "default" }, { "default": ($$result4) => renderTemplate`Tailwind` })} </div> <div class="flex gap-6"> <a href="https://github.com/issac-326/Portfolio" target="_blank"> ${renderComponent($$result3, "Button", Button, { "variant": "default", "aria-label": "github repository" }, { "default": ($$result4) => renderTemplate`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-300 dark:text-gray-800 w-5 h-5"><title>GitHub</title><path class="highlight-on-hover" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>` })} </a> <a${addAttribute(`/${lang}/#aboutMe`, "href")}> ${renderComponent($$result3, "Button", Button, { "aria-label": "internal a" }, { "default": ($$result4) => renderTemplate`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-300 dark:text-gray-800 w-5 h-5"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>` })} </a> </div> ` })} ` })} </div>`;
}, "C:/Users/issac/Documents/foking portafolio/Portfolio/src/pages/components/Proyects.astro", void 0);

const $$file = "C:/Users/issac/Documents/foking portafolio/Portfolio/src/pages/components/Proyects.astro";
const $$url = "/components/Proyects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Proyects as $, _page as _, getLangFromUrl as g, useTranslations as u };
