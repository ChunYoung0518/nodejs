const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const percentage = Math.floor((currentTime/waitTime) *100);
    // console.log(`Waitting ${currentTime/1000} seconds`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${percentage}%`);
}

console.log(`Setting a ${waitTime/1000} seconds delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Done");
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);