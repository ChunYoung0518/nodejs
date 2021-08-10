const fs = require("fs");

const writeStream = fs.createWriteStream("./myFile.txt", "utf-8");
const readStream = fs.createReadStream("../FileSystem/Readme.md", "utf-8");

//write to file
writeStream.write("Hello");
writeStream.write(" world!\n");

readStream.on("data", data => {
    writeStream.write(data);
});

// readStream.pipe(writeStream);

process.stdin.on("data", data => {
    writeStream.write(data);
});

//write to terminal
// process.stdout.write("Hello");
// process.stdout.write(" world!\n");

process.stdin.pipe(writeStream);