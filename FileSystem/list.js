const fs = require("fs");

//Synchornous
// console.log("Start reading files...");
// const files = fs.readdirSync("../");
// console.log("complete...");
// console.log(files);

//Asynchronous

fs.readdir("../", (err, files) => {

    if(err) {
        throw err;
    }
    console.log("complete");
    console.log(files);
});

console.log("Start reading files...");


