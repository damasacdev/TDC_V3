window.$ = window.jQuery = require('../../../assets/jquery/dist/jquery.min.js');
const electron = require('electron');
const remote = electron.remote;
const dialog = remote.dialog;
const app = electron.remote.app;
const BrowserWindow = remote.BrowserWindow;
let winHome;


$('#title').html('TDC Version '+app.getVersion());
if(localStorage.getItem('user') != '' && localStorage.getItem('user') != null){
    newFunction();
}

$('#btn-login').click(function(){
    $('#btn-login').attr('disabled',true);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tdcservice.thaicarecloud.org/user",
        "method": "GET",
        "headers": {
          "authorization": "Basic "+btoa($('#username').val()+":"+$('#password').val()),
          "cache-control": "no-cache",
        }
      }
      
      $.ajax(settings).done(function (res) {
          localStorage.setItem('user',JSON.stringify(res));
          $('#btn-login').attr('disabled',false);
          newFunction();
      }).fail(function(error){
        alert("Username หรือ Password ไม่ถูกต้อง");
        $('#btn-login').attr('disabled',false);
      });
});

function newFunction() {
    let mainWin = BrowserWindow.getFocusedWindow();
    mainWin.hide();
    winHome = new BrowserWindow({ width: 800, height: 500 });
    winHome.loadURL('file://' + __dirname + '/../../dashboard/html/home.html');
    winHome.on('closed',function(){
        app.quit(0);
    });
}




