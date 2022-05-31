import "./style.scss";
import logo from "../../assets/images/logo.svg";

const versions = AppAPI.getVersions();

function openExternal(event: MouseEvent) {
  event.preventDefault();
  AppAPI.openExternal((<HTMLAnchorElement>event.currentTarget).href);
}

document.getElementById("app")!.innerHTML = `<div class="main">
<img src="${logo}" width="120" />
<div class="info">
  <h1>Hello!</h1>
  <p>It's Vite/esbuild Electron Boilerplate</p>
</div>
<div class="versions">
  <div>NodeJS: ${versions.node}</div>
  <div>Chrome: ${versions.chrome}</div>
  <div>Electron: ${versions.electron}</div>
</div>
<a href="https://www.electronjs.org/">Electron</a>
<a href="https://github.com/JoCat/electron-fast-boilerplate">Our GitHub</a>
</div>`;

document.querySelectorAll("a").forEach((a) => (a.onclick = openExternal));
