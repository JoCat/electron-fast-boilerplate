# Vite/esbuild Electron Boilerplate

Fast development boilerplate for Electron app based on Vite/esbuild + TypeScript + Sass + Vue/React/Svelte/Vanilla

![](.github/image.png)

## Usage

Create a new repository based on this template or just download it. Then customize the template for a specific framework.

All current framework templates can be viewed here: [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)

### To use React:

Install additional dependencies:

```bash
npm i react react-dom
npm i -D @types/react @types/react-dom @vitejs/plugin-react
```

replace the contents of the `build:renderer` script with: `tsc && vite build`

configure vite.config.ts:

import plugin `import react from '@vitejs/plugin-react'`
and set config `plugins: [react()]`

Example:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

download and replace tsconfig.json and tsconfig.node.json from [template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

сonfigure electron-devtools-installer in the `src/main/core/ApplicationWindow.ts` file

make the rest of the settings in the `src/renderer` folder according to the template [template-react-ts/src](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts/src)

### To use Vue:

Install additional dependencies:

```bash
npm i vue
npm i -D @vitejs/plugin-vue vue-tsc
```

replace the contents of the `build:renderer` script with: `vue-tsc --noEmit && vite build`

configure vite.config.ts:

import plugin `import vue from '@vitejs/plugin-vue'`
and set config `plugins: [vue()]`

Example:

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
});
```

download and replace tsconfig.json and tsconfig.node.json from [template-vue-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue-ts)

сonfigure electron-devtools-installer in the `src/main/core/ApplicationWindow.ts` file

make the rest of the settings in the `src/renderer` folder according to the template [template-vue-ts/src](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue-ts/src)

Don't forget to configure env.d.ts/vite-env.d.ts

### To use Svelte:

Install additional dependencies:

```bash
npm i -D @sveltejs/vite-plugin-svelte @tsconfig/svelte svelte svelte-preprocess tslib
```

configure vite.config.ts:

import plugin `import { svelte } from '@sveltejs/vite-plugin-svelte'`
and set config `plugins: [svelte()]`

Example:

```ts
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
});
```

download and replace tsconfig.json and tsconfig.node.json from [template-svelte-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-svelte-ts)

сonfigure electron-devtools-installer in the `src/main/core/ApplicationWindow.ts` file

make the rest of the settings in the `src/renderer` folder according to the template [template-svelte-ts/src](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-svelte-ts/src)

Don't forget to configure vite-env.d.ts
