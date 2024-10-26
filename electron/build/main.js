"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const child_process_1 = require("child_process");
const wait_on_1 = __importDefault(require("wait-on"));
let mainWindow1;
let mainWindow2;
let mainWindow3;
let mainWindow4;
let mainWindow5;
let serveProcess = null;
const createWindow = () => {
    const primaryDisplay = electron_1.screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay.workAreaSize;
    mainWindow1 = new electron_1.BrowserWindow({
        width: width - 200,
        height: 100,
        x: 0,
        y: 0,
        frame: false,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    mainWindow2 = new electron_1.BrowserWindow({
        width: 300,
        height: height - 100,
        x: 0,
        y: 150,
        frame: false,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    mainWindow3 = new electron_1.BrowserWindow({
        width: (width - 500) / 2,
        height: height - 100,
        x: 300,
        y: 150,
        frame: false,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    mainWindow4 = new electron_1.BrowserWindow({
        width: (width - 500) / 2,
        height: height - 100,
        x: (width - 500) / 2 + 300,
        y: 150,
        frame: false,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    mainWindow5 = new electron_1.BrowserWindow({
        width: 200,
        height: height,
        x: width - 200,
        y: 0,
        frame: false,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    mainWindow1.loadURL("http://localhost:5827");
    mainWindow2.loadURL("http://localhost:5827");
    mainWindow3.loadURL("http://localhost:5827");
    mainWindow4.loadURL("http://localhost:5827");
    mainWindow5.loadURL("http://localhost:5827");
    // ウィンドウが閉じられたときの処理
    const closeWindows = () => {
        mainWindow1 = null;
        mainWindow2 = null;
        mainWindow3 = null;
        mainWindow4 = null;
        mainWindow5 = null;
        // serve プロセスが実行中であれば停止する
        if (serveProcess) {
            serveProcess.kill();
        }
        // アプリケーションを終了させる
        electron_1.app.quit();
    };
    mainWindow1.on("closed", closeWindows);
    mainWindow2.on("closed", closeWindows);
    mainWindow3.on("closed", closeWindows);
    mainWindow4.on("closed", closeWindows);
    mainWindow5.on("closed", closeWindows);
};
// アプリケーションの準備ができたらウィンドウを作成
electron_1.app.whenReady().then(() => {
    // yarn serve を実行
    serveProcess = (0, child_process_1.exec)("./node_modules/.bin/serve -s build -l 5827", (error, stdout, _stderr) => {
        if (error) {
            console.error(`Error starting yarn serve: ${error}`);
            return;
        }
        console.log(`yarn serve output: ${stdout}`);
    });
    // ポート 5827 が利用可能になるまで待機してからウィンドウを作成
    (0, wait_on_1.default)({ resources: ["http://localhost:5827"] }, (err) => {
        if (err) {
            console.error("Error waiting for localhost:5827:", err);
            return;
        }
        // サーバーが起動したらウィンドウを作成
        createWindow();
    });
    electron_1.app.on("activate", () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
// すべてのウィンドウが閉じられたときにアプリを終了する
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
