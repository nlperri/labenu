//------Exercício 1-------

// Vamos alterar a forma de nossa exibição de strings agora.
// Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;
// Exiba no console quantos caracteres tem o nome da pessoa.
// Cheque se o nome da pessoa possui a letra A

// const nome = "Natália Perri";

// console.log(nome.toUpperCase());

// console.log(nome.length);

// console.log(nome.includes("a"));

//-----Exercício 2--------

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a mensagem no formato abaixo:
// O e-mail emailDoUsuario foi cadastrado com sucesso. Boas vindas, nomeDoUsuario!

// 2. Adicione à mensagem anterior a quantidade de caracteres presente no nome da pessoa.

// 3. A seguir, faça o que se pede:
// Substitua todas as letras R na frase criada, por letras X
// Verifique se o e-mail da pessoa possui @, e imprima a resposta da checagem no console.

const nome = "Natália Perri";
const email = "lnataliaperri@gmail.com";

console.log(
  `O email ${email} foi cadastrado com sucesso. \nBoas vindas ${nome}!\nO seu nome possui ${nome.length} caracteres.`
);

const frase = `O email ${email} foi cadastrado com sucesso. \nBoas vindas ${nome}!\nO seu nome possui ${nome.length} caracteres.`;

console.log(frase.replaceAll("r", "x"));

console.log(`Seu email possui @? ${email.includes("@")}`);
