import { app, BrowserWindow, screen } from "electron";
import { exec, ChildProcess } from "child_process";
// import waitOn from "wait-on";

let mainWindow: BrowserWindow | null;

let serveProcess: ChildProcess | null = null;

const createWindow = () => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    x: 0,
    y: 0,
    frame: false,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL("http://localhost:3000");

  // ウィンドウが閉じられたときの処理
  const closeWindows = () => {
    mainWindow = null;

    // // serve プロセスが実行中であれば停止する
    // if (serveProcess) {
    //   serveProcess.kill();
    // }

    // アプリケーションを終了させる
    app.quit();
  };

  mainWindow.on("closed", closeWindows);
};

// アプリケーションの準備ができたらウィンドウを作成
app.whenReady().then(() => {
  // // yarn serve を実行
  // serveProcess = exec(
  //   "./node_modules/.bin/serve -s build -l 5827",
  //   (error, stdout, _stderr) => {
  //     if (error) {
  //       console.error(`Error starting yarn serve: ${error}`);
  //       return;
  //     }
  //     console.log(`yarn serve output: ${stdout}`);
  //   }
  // );

  // // ポート 5827 が利用可能になるまで待機してからウィンドウを作成
  // waitOn({ resources: ["http://localhost:5827"] }, (err) => {
  //   if (err) {
  //     console.error("Error waiting for localhost:5827:", err);
  //     return;
  //   }
  //   // サーバーが起動したらウィンドウを作成
  //   createWindow();
  // });
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// すべてのウィンドウが閉じられたときにアプリを終了する
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
