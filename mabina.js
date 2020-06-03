const { app, BrowserWindow } = require('electron')
const path = require("path")
const url = require("url")

let mainWin;

function createWindow(){
    mainWin = new BrowserWindow({
        fullscreen: false,
        frame: true
    })
    mainWin.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file',
        slashes: true 
    }));

    mainWin.on('closed', () => {
        mainWin = null
    })

    // mainWin.webContents.openDevTools()

}


app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){ app.quit() }
})