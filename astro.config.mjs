import yaml from '@rollup/plugin-yaml';

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  vite: {
    plugins: [yaml()],
  },
});
