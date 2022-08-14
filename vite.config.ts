import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import react from "@vitejs/plugin-vue";
import { join } from "path";

const toDir = (dir: string) => join(__dirname, dir);

export default defineConfig({
  root: toDir("src/renderer"),
  base: "",
  // plugins: [react()], - for react
  // plugins: [vue()], - for vue
  // and more...
  build: {
    sourcemap: true,
    outDir: toDir("dist/renderer"),
    assetsDir: ".",
    emptyOutDir: true,
  },
});
