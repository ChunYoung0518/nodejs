const fs = require("fs");

const readStream = fs.createReadStream("../FileSystem/Readme.md", "utf-8");

let fileText = "";

readStream.on("data", data => {
    console.log(`You just read ${data.length-1} characters of text`);
    fileText += data;
})

readStream.once("data", data => {
    console.log(data);
})

readStream.on("end", data => {
    console.log("Finished reading the file.");
    console.log(`In total it reads ${fileText.length-1} characters of Text.`)
})
// console.log("input something herer");

// process.stdin.on("data", data => {
//     console.log(`You just input ${data.length-1} characters of text`);
// })