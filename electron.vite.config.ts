import { defineConfig } from "electron-vite";
// import react from "@vitejs/plugin-react";
// import react from "@vitejs/plugin-vue";

export default defineConfig({
  main: {},
  preload: {},
  renderer: {
    // plugins: [react()], - for react
    // plugins: [vue()], - for vue
    // and more...
  },
});
