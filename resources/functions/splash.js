const {
    BrowserWindow, app
} = require('electron');
const {join} = require("path");

const SplashScreen = {
    win: null,
    CreateWindow() {
        this.show()
        return SplashScreen
    },
    Destroy() {
        this.win.destroy()
    },
    show: function () {
        this.win = new BrowserWindow({
            icon: join(__dirname, `../icons/icon.ico`),
            width: 300,
            height: 300,
            resizable: true,
            show: true,
            center: true,
            transparent: false,
            title: app.getName(),
            frame: true,
            thickFrame: false,
            skipTaskbar: true,
            alwaysOnTop: true,
            // skipTaskbar: true,
            webPreferences: {
                nodeIntegration: true
            }
        })
        this.win.show()
        this.win.loadURL("https://shaka-player-demo.appspot.com/");
        this.win.on("closed", () => {
            this.win = null
        })
    }
}

module.exports = SplashScreen