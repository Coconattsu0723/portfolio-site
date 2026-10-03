import { defineConfig } from "astro/config";

const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  base,
  build: {
    inlineStylesheets: "never",
  },
});
