const[,,firstName, lastName] = process.argv;


console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

console.log(`My name is ${firstName} ${lastName}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};
const user = grab("--user");
const greeting = grab("--greeting");

console.log(`${greeting} ${user}`);
