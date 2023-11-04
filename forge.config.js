module.exports = {
  packagerConfig: {
    asar: true,
    ignore(path) {
      if (!path) return false;
      if (path.startsWith("/package.json")) return false;
      if (path.startsWith("/.vite")) return false;

      if (path === "/node_modules") return false;
      if (path.startsWith("/node_modules/electron-squirrel-startup"))
        return false;

      return true;
    },
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
    {
      name: "@electron-forge/plugin-vite",
      config: {
        build: [
          {
            entry: "src/main/main.ts",
            config: "vite.main.config.ts",
          },
          {
            entry: "src/preload/preload.ts",
            config: "vite.preload.config.ts",
          },
        ],
        renderer: [
          {
            name: "main_window",
            config: "vite.renderer.config.ts",
          },
        ],
      },
    },
  ],
};
