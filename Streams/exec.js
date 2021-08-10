const cp = require("child_process");

// cp.exec("open http://www.linkedin.com/learning");
// cp.exec("open -a Terminal .");
// cp.exec("lst", (err, data, stderr) => {
//     if(err) {
//         console.log(stderr);
//         // throw err;
//     }

//     console.log(data);
// });

//run a node js
cp.exec("node readStream", (err, data, stderr) => {
    if(err) {
        console.log(stderr);
        // throw err;
    }

    console.log(data);
});