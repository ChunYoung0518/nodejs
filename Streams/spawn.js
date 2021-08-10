const cp = require("child_process");

const questionApp = cp.spawn("node", ["../questionsWithReadLine.js"]);

questionApp.stdin.write("Daniel \n");
questionApp.stdin.write("NSW \n");
questionApp.stdin.write("Work \n");


questionApp.stdout.on("data", data => {
    console.log(`From the question app: ${data}`);
})

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
});