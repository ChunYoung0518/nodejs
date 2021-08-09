const name = require("./myNameModule");
// const counter = require("./myModule");

const {inc, dec, getCount} = require("./myModule");

console.log(name);

//counter.inc();
inc();
inc();
inc();

console.log(getCount());

dec();
console.log(getCount());
