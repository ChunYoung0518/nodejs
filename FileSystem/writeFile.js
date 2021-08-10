const fs = require("fs");

const md = `
#This is a new file created by the node js

Write anything in this file;

*fs.readdir
*fs.readFile
*fs.writeFile


`;

fs.writeFile("./fsNotes.md", md.trim(), err => {
    if(err) {
        throw err;
    }
    console.log("file saved");
})