const fs = require("fs");

//Synchronous
// const text = fs.readFileSync("./Readme.md", "utf-8");
// console.log(text);

//Asynchronous
// fs.readFile("./Readme.md", "utf-8", (err, text) => {
//     if(err) {
//         throw err;
//     }
        
//     console.log("Reading file content...");
//     console.log(text);
// });

//read binary file
fs.readFile("./code.png", (err, img) => {
    if(err) {
        console.log(`Error when loading the image: ${err.message}`);
        process.exit();
    }
        
    console.log("Reading file content...");
    console.log(img);
});

