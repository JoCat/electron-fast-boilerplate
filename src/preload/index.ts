import { contextBridge, shell } from "electron";

export const AppAPI = {
  getVersions: () => process.versions,
  openExternal: (url: string) => shell.openExternal(url),
};

contextBridge.exposeInMainWorld("AppAPI", AppAPI);
