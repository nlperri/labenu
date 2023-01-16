let question = prompt(
  "Você deseja comer mais coxinha? \n S: Sim\n N: Não"
).toUpperCase();

let conta = 0;

while (question === "S") {
  conta = conta + 2.5;
  question = prompt(
    "Você deseja comer mais coxinha? \n S: Sim\n N: Não"
  ).toUpperCase();
}

console.log(conta);
