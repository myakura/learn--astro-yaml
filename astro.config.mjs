import yaml from '@rollup/plugin-yaml';

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Comment out "renderers: []" to enable Astro's default component support.
  renderers: [],
	vite: {
    plugins: [yaml()],
  },
});
