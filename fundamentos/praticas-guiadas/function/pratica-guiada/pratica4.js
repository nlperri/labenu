const pratica4 = (nasc, anoAtual) => {
  const maiorIdade = anoAtual - nasc >= 18;
  return maiorIdade;
};

const digiteNasc = Number(prompt("Digite ano de nascimento:"));
const digiteAno = Number(prompt("Digite ano atual:"));

// if (pratica4(digiteNasc, digiteAno) === true)
//   console.log("Você é maior de idade");
// else console.log("Você é menor de idade");

console.log("Você é maior de idade?", pratica4(digiteNasc, digiteAno));
