let nome = prompt("Nome completo:");

let nasc = prompt("Data de nascimento (utilize as /):");

let endereco = prompt("Endereço:");

let cpf = prompt("CPF:");

let escola = prompt("Escolaridade:");

let chn = prompt("Possui CHN?");

let numFilhos = Number(prompt("Quantos filhos possui?"));

let cargoAtual = prompt("Cargo atual:");

let salario = Number(prompt("Salário:"));

let comissao = Number(
  prompt(
    "Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"
  )
);

let anoAdmissao = Number(prompt("Informe o ano de admissão:"));

console.log(
  typeof nome,
  typeof nasc,
  typeof endereco,
  typeof cpf,
  typeof escola,
  typeof chn,
  typeof numFilhos,
  typeof cargoAtual,
  typeof salario,
  typeof comissao,
  typeof anoAdmissao
);

console.log(`Nome completo: ${nome} \n 
            Data de nascimento: ${nasc} \n
            Endereço: ${endereco} \n
            CPF: ${cpf} \n
            Escolaridade: ${escola} \n
            Possui CHN? ${chn} \n
            Quantos filhos possui? ${numFilhos} \n
            Cargo atual: ${cargoAtual} \n
            Salário: ${salario} \n
            Recebe comissão? ${comissao} \n
            Informe o ano de admissão: ${anoAdmissao}
        `);
