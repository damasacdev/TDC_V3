window.$ = window.jQuery = require('../../../assets/jquery/dist/jquery.min.js');
const electron = require('electron');
const remote = electron.remote;
const app = electron.remote.app;
const BrowserWindow = remote.BrowserWindow;
const ipcRenderer = electron.ipcRenderer;

$('#title').html('TDC Version '+app.getVersion());


$('#btn-logout').click(function(){
    BrowserWindow.getFocusedWindow().hide();
    localStorage.removeItem('user');
    ipcRenderer.send('logout',true);
});