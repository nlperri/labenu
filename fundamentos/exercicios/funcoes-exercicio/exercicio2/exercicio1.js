function exA(num1, num2) {
  const soma = num1 + num2;
  return soma;
}

function exB(num1, num2) {
  const maiorIgual = num1 >= num2;
  return maiorIgual === true;
}

function exC(num) {
  const par = num % 2 === 0;
  return par === true;
}

const digNum1 = Number(prompt("Digite um número:"));
const digNum2 = Number(prompt("Digite outro número:"));
const digPar = Number(prompt("Digite um número para saber se ele é par:"));

console.log(exA(digNum1, digNum2));

console.log(exB(digNum1, digNum2));

console.log(`Este número é par?`, exC(digPar));
