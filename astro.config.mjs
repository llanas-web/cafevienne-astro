import { defineConfig } from "astro/config";
import vercelServerless from "@astrojs/vercel/serverless";
import vercelStatic from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";

const confProd = {
  output: "static",
  adapter: vercelStatic(),
};
const confPreview = {
  output: "server",
  adapter: vercelServerless(),
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
  vite: {
    plugins: [basicSsl()],
  },
});
