// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = process.env.ASTRO_SITE ?? "https://luminux.example.com";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [tailwind({ applyBaseStyles: false })],
});
