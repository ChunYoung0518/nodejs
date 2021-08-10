const fs = require("fs");

fs.renameSync("./nested-storage/colors.md", "./nested-storage/newColors.md");

fs.rename("./nested-storage/newColors.md", "./newColors.md", err => {
    if(err) {
        throw err;
    }
});


setTimeout(() => {
    fs.unlinkSync("./newColors.md")
}, 10000)