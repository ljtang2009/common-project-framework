import { app, BrowserWindow } from "electron";
import path from "node:path";
import { URL } from "url";

const __dirname = new URL(".", import.meta.url).pathname;

const s = import.meta.env.VITE_SOME_KEY;
// const s = __APP_ENV_DEMO__;
console.log(s);
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "../../dist-example/preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "../../dist-example/index.html"));
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
