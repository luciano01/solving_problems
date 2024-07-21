const readline = require("readline");

const grade = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let gradeA = 0;
let gradeB = 0;

const weightA = 3.5;
const weightB = 7.5;

let average = 0;

grade.question("First grade? ", (resultA) => {
  gradeA = parseFloat(resultA);
  grade.question("Second grade? ", (resultB) => {
    gradeB = parseFloat(resultB);
    average = (gradeA * weightA + gradeB * weightB) / (weightA + weightB);
    console.log(`The average is: ${average.toFixed(5)}`);
    grade.close();
  });
});
