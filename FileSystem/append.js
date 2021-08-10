const fs = require("fs");
const colorDate = require("./colors.json");

colorDate.colorList.forEach( c => {
    fs.appendFile("./nested-storage/colors.md", `${c.color}: ${c.hex} \n`, err => {
        if(err) {
            throw err;
        }
    });
})