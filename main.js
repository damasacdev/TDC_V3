const electron = require('electron');
const {app, BrowserWindow} = electron;
const ipcMain = electron.ipcMain;


let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 525, height: 330});
  mainWindow.loadURL('file://' + __dirname + '/src/login/html/index.html');
  // mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
    app.quit(0);
  })
}


app.on('ready', createWindow)


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit(0);
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
})

ipcMain.on('logout',function(event,data){
  if(data == true){
    mainWindow.show();
  }
});
