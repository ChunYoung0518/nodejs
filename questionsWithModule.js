const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you gona do with Node js? "
];



collectAnswers(questions);

// collectAnswers(questions, answers => {
//     console.log("Thank you for submitting your answers!");
//     console.log(answers);
//     process.exit();
// });