function descInss(sal) {
  const salDesc = sal - sal * 0.1;
  return salDesc;
}

const digSal = Number(prompt("Digite seu salário sem desconto"));

console.log(
  `Seu salário com o valor do INSS descontado é de`,
  descInss(digSal)
);
