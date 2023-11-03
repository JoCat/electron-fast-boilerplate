import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import react from "@vitejs/plugin-vue";
import { join } from "path";

// https://vitejs.dev/config
export default defineConfig({
  root: join(__dirname, "src/renderer"),
  // plugins: [react()], - for react
  // plugins: [vue()], - for vue
  // and more...
});
