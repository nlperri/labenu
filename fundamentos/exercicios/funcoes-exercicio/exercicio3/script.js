function soma(num1, num2) {
  const totalSoma = num1 + num2;
  return totalSoma;
}

function sub(num1, num2) {
  const totalSub = num1 - num2;
  return totalSub;
}

function mult(num1, num2) {
  const totalMult = num1 * num2;
  return totalMult;
}

function div(num1, num2) {
  const totalDiv = num1 / num2;
  return totalDiv;
}

const digNum1 = Number(prompt("Digite um número:"));
const digNum2 = Number(prompt("Digite outro número:"));

console.log(
  `A soma entre ${digNum1} e ${digNum2} é de`,
  soma(digNum1, digNum2)
);
console.log(
  `A subtração entre ${digNum1} e ${digNum2} é de`,
  sub(digNum1, digNum2)
);
console.log(
  `A multiplicação entre ${digNum1} e ${digNum2} é de`,
  mult(digNum1, digNum2)
);
console.log(
  `A divisão entre ${digNum1} e ${digNum2} é de`,
  div(digNum1, digNum2)
);
