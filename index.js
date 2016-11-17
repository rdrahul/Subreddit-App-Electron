const electron = require('electron');
const remote = electron.remote;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () =>
{
    var mainWindow = new BrowserWindow({
        width : 1280 ,
        height : 720
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html')
});
