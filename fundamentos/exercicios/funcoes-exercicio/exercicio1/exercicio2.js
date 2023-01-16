const tabuada = (num) => {
  return `${num} x 1 = ${num}
${num} x 2 = ${num * 2}
${num} x 3 = ${num * 3}
${num} x 4 = ${num * 4}
${num} x 5 = ${num * 5}
${num} x 6 = ${num * 6}
${num} x 7 = ${num * 7}
${num} x 8 = ${num * 8}
${num} x 9 = ${num * 9}
${num} x 10 = ${num * 10}
    `;
};

const InsNum = Number(prompt("Insira um número e adquira a tabuada dele:"));

console.log(tabuada(InsNum));

////////////////////////////////////////

function tabuada2(num2) {
  return `${num2} x 1 = ${num2}
${num2} x 2 = ${num2 * 2}
${num2} x 3 = ${num2 * 3}
${num2} x 4 = ${num2 * 4}
${num2} x 5 = ${num2 * 5}
${num2} x 6 = ${num2 * 6}
${num2} x 7 = ${num2 * 7}
${num2} x 8 = ${num2 * 8}
${num2} x 9 = ${num2 * 9}
${num2} x 10 = ${num2 * 10}
        `;
}

const InsNum2 = Number(
  prompt("Insira um outro número e adquira a tabuada dele:")
);

console.log(tabuada(InsNum2));
