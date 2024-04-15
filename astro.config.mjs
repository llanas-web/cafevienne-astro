import { defineConfig } from "astro/config";
import vercelServerless from "@astrojs/vercel/serverless";
import vercelStatic from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";

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
});
