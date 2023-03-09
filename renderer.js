let electron = require("electron");

let { ipcRenderer } = electron;

document.getElementById("minimize-btn").addEventListener("click", () => {
    ipcRenderer.send("window:navigation", "minimize");
});
