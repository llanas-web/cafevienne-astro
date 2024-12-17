import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";

const confProd = {
  output: "static",
  adapter: vercel(),
  vite: {
    plugins: [basicSsl()],
  },
};
const confPreview = {
  output: "server",
  adapter: vercel(),
};

// https://astro.build/config
export default defineConfig({
  ...(process.env.NODE_ENV === "production" ? confProd : confPreview),
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es", "ca"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
