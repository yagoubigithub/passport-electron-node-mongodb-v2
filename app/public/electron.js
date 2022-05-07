const electron = require("electron");





const { app } = electron;




app.on("ready", () => {


  const mainWindow = require('./mainWindow');

 //  mainWindow.setMenu(null);

 
 mainWindow.on("ready-to-show" ,  ()=>{
    mainWindow.show()
 })


  
  
});