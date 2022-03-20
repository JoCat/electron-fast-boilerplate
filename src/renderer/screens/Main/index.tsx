import "./style.scss";
import logo from "../../assets/images/logo.svg";
import { MouseEvent, useState } from "react";

export const Main = () => {
  const [versions] = useState(AppAPI.getVersions());

  const openExternal = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    AppAPI.openExternal(event.currentTarget.href);
  };

  return (
    <div className="main">
      <img src={logo} width={120} />
      <div className="info">
        <h1>Hello!</h1>
        <p>It's Vite/esbuild Electron Boilerplate</p>
      </div>
      <div className="versions">
        <div>NodeJS: {versions.node}</div>
        <div>Chrome: {versions.chrome}</div>
        <div>Electron: {versions.electron}</div>
      </div>
      <a onClick={openExternal} href="https://www.electronjs.org/">
        Electron
      </a>
      <a
        onClick={openExternal}
        href="https://github.com/JoCat/electron-fast-boilerplate"
      >
        Our GitHub
      </a>
    </div>
  );
};
