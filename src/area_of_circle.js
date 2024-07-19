const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const PI = 3.14159;
var area;

input.question("R value? ", (result) => {
  area = PI * result ** 2;
  console.log(`Area of a Circle is ${area.toFixed(4)}`);
  input.close();
});
