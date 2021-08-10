const fs = require("fs");

if (fs.existsSync("nested-storage")) {
    console.log("directory already exists");
} else {
    fs.mkdir("nested-storage", err => {
        if(err) {
            throw err;
        }
    
        console.log("directory created!");
    
    })
}
