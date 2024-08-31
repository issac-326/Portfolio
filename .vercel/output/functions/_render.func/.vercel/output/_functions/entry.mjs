import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_vg65lzwT.mjs';
import { manifest } from './manifest_CqjMAiWW.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/components/logos.astro.mjs');
const _page2 = () => import('./pages/components/proyects.astro.mjs');
const _page3 = () => import('./pages/en.astro.mjs');
const _page4 = () => import('./pages/es.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.15.1_@types+node@22.5.1_rollup@4.21.2_sass@1.77.8_terser@5.31.6_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/components/Logos.astro", _page1],
    ["src/pages/components/Proyects.astro", _page2],
    ["src/pages/en/index.astro", _page3],
    ["src/pages/es/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "2057c948-3edc-431a-b7f7-e44f5e4e16a6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
