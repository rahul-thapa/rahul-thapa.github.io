// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://rahul-thapa.github.io",

  vite: {
    plugins: [tailwindcss(), svgr()],
  },
});
