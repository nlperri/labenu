let readlineSync = require("readline-Sync");
let num = +readlineSync.question("Digite um número");

for (let i = 1; i <= 10; i++) {
  let tabuada = [num * i];
  for (let j in tabuada) {
    console.log(`${num} x ${i} = ${tabuada[j]}`);
  }
}
