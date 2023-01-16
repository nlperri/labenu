let num1 = Number(prompt("Digite um número"));
let num2 = Number(prompt("Digite outro número"));

let case1 = num1 > num2;
let case2 = num1 == num2;
let case3;
let case4;

if (num1 % num2 == 0) {
  case3 = true;
} else {
  case3 = false;
}

if (num2 % num1 == 0) {
  case4 = true;
} else {
  case4 = false;
}

console.log(`${num1} > ${num2}? ${case1} \n
${num1} == ${num2}? ${case2} \n
${num1} divisível por ${num2}? ${case3} \n
${num2} divisível por ${num1}? ${case4}
`);
