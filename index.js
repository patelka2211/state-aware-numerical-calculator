let electron = require("electron");

let { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 700,
        frame: false,
        // resizable: false,
        // maximizable: false,
        // minimizable: false,
        // webPreferences: {preload:'preload.js'},
    });

    mainWindow.loadFile("index.html");

    mainWindow.setResizable(false);
    mainWindow.setMaximizable(false);
    mainWindow.setMinimizable(false);
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

ipcMain.on("window:navigation", (event, msg) => {
    console.log(msg);
});
