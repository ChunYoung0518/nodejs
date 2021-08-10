const fs = require("fs");

//rename file
fs.renameSync("./nested-storage/colors.md", "./nested-storage/newColors.md");
//move file
fs.rename("./nested-storage/newColors.md", "./newColors.md", err => {
    if(err) {
        throw err;
    }
});

//remove file
setTimeout(() => {
    fs.unlinkSync("./newColors.md")
}, 10000)