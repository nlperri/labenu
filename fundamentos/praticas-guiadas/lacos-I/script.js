// Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.

// Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.

// Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0.
// O resultado deve ser: 70

// let num = +prompt(`Digite um número:`);

// let total = 0;

// while (num != 0) {
//   total = total + num;
//   num = +prompt(`Digite um número:`);
// }

// console.log(total);

// ----------------------------------------------

// Vamos escrever um programa que recebe um número por input de usuário.
// Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
// Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.

// let num2 = +prompt("Digite um número");

// for (let i = 0; i <= num2; i++) {
//   console.log(i);
// }

//---------------------------------------------

// Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
// “O número do índice ${indice} é ${numero[indice]}”

// let array = [5, 6, 29, 46, 789];

// for (i = 0; i < array.length; i++) {
//   console.log(`O número do índice ${i} é ${array[i]}`);
// }

//----------------------------------------------

// 1. Utilizando o laço while, escreva um código que recebe um prompt esperando seu tipo de usuário. O tipo de usuário é representado pelas letras abaixo:
// “A”: Administrador;
// “B”: Usuário comum;
// “C”: Usuário assinante

// Enquanto o valor passado for diferente da letra que representa “Administrador”, o laço deve se repetir, exibindo a mensagem: “Acesso negado.”
// Quando o valor for igual ao da letra que representa “Administrador”, o laço deve parar, e a mensagem “Boas-vindas, admin!” deve ser impressa.

// let user = prompt(`Digite a letra correspondente:
//  “A”: Administrador;
// “B”: Usuário comum;
// “C”: Usuário assinante`).toUpperCase();

// while (user !== "A") {
//   alert(`Acesso negado, tente novamente.`);
//   user = prompt(`Digite a letra correspondente:
//     “A”: Administrador;
//    “B”: Usuário comum;
//    “C”: Usuário assinante`).toUpperCase();
// }

// console.log(`Boas vindas, admin!`);

//---------------------------------------------------

// let tabuada = 3;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${tabuada}x${i}=${i * tabuada}`);
// }

//---------------------------------------------------

let arrayStrg = ["a", "b", "c", "d"];

for (let i = 0; i < arrayStrg.length; i++) {
  console.log(arrayStrg[i].toUpperCase());
}
