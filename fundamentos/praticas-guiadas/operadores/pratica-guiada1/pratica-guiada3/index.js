//Exercício 1

let idade = Number(prompt("Qual a sua idade?"));
console.log(`Minha idade é ${idade}`);

let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"));
console.log(`A idade do meu melhor amigo é ${idadeAmigo}`);

let mensagem1 = idade > idadeAmigo;

console.log(`Sua idade é maior do que a do seu melhor amigo? ${mensagem1}`);

let diferencaIdade = idade - idadeAmigo;
console.log(
  `A diferença de idade entre você e seu amigo é de ${diferencaIdade}`
);

//Exercício 2

let a = true;
let b = true;
let c = true;
let d = true;

let resp1 = !b && d;
let resp2 = b && a && !d;
let resp3 = a || d;
let resp4 = c && !d;

console.log(`!b && d: ${resp1}`);
console.log(`(b && a) && !d: ${resp2}`);
console.log(`a || d: ${resp3}`);
console.log(`c && !d: ${resp4}`);
