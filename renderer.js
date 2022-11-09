const information = document.getElementById('info')
const { remote } = require('electron')
const dbInstance = remote.getGlobal('db')
const fs = require("fs");
const { dialog } = require("electron").remote;

// button click event
document.getElementById("save").addEventListener("click", () => {
    const data = "Successfully wrote to the desktop"; // the data we want to save to the desktop
    //launch save dialog window
    dialog.showSaveDialog(filename => {
        //save file at the destination indicated by filename
        fs.writeFileSync(filename + ".txt", data, "utf-8", () => {
            console.log("attempted to write to the desktop");
        });
    });
});

// supposed to do something with db Instance - need to research a little more
//https://dev.to/ctxhou/local-data-storage-for-electron-2h4p

information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
    try {
        const response = await window.versions.ping()
        console.log(response) // prints out 'pong'
    } catch (err) {
        console.log(err)
    }
  }
  
func()