const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("customerEvent", (message, sender) => {
    console.log(`${sender} said: ${message}`);
});

emitter.emit("customerEvent", "Hello world!", "Daniel");
emitter.emit("customerEvent", "Very cool event!", "Daniel");

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if(input == "exit") {
        emitter.emit("customerEvent", "Goodbye!", "process");
        process.exit();
    }
    emitter.emit("customerEvent", input, "terminal");
})
