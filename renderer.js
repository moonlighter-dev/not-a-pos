const information = document.getElementById('info')
const { remote } = require('electron')
const dbInstance = remote.getGlobal('db')

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