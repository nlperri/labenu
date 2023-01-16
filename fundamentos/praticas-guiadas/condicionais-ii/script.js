// //// usando if aninhado

// let dependente;

// dependente = 12;

// if (dependente >= 13) {
//   if (dependente <= 17) {
//     console.log("Pode ter o cartão de dependente");
//   } else {
//     console.log("O limite de idade é 17 anos");
//   }
// } else {
//   console.log(
//     "Para ter o cartão o dependente precisa ter entre 13 e 17 anos. Consulte outras possibilidades do Labank"
//   );
// }

// // //// usando operadores lógicos

// if (dependente >= 13 && dependente <= 17) {
//   console.log("Pode ter o cartão de dependente");
// } else {
//   console.log(
//     "Para ter o cartão o dependente precisa ter entre 13 e 17 anos. Consulte outras possibilidades do Labank"
//   );
// }

// //// usando if ternário

// dependente === 13
//   ? console.log("pode ter o cartão")
//   : console.log("consulte outras opções");

// // //// usando switch-case

// let escolhaUsuario = 1;
// let cartao;

// switch (escolhaUsuario) {
//   case 1:
//     cartao = "fácil";
//     break;
//   case 2:
//     cartao = "black";
//     break;
//   case 3:
//     cartao = "platinum";
//     break;
//   case 4:
//     cartao = "master gold";
//     break;
//   default:
//     console.log("escolha uma das opções disponíveis");
// }

// console.log(`Cartão ${cartao}`);

/////// exercício

const num = +prompt(`Digite um número`);

if (num % 2 === 0) {
  console.log("Esse número é divisível por 2");
  if (num % 3 === 0) {
    console.log("Esse número é divisível por 2 e 3");
    // num === 30
    //   ? console.log("UFA Acertei!")
    //   : console.log("Não foi dessa vez :(");
    switch (num) {
      case 6:
        console.log("número 6 é divisível por 2 e 3");
        break;
      case 12:
        console.log("número 12 é divisível por 2 e 3");
        break;
      case 18:
        console.log("número 18 é divisível por 2 e 3");
        break;
      case 24:
        console.log("número 24 é divisível por 2 e 3");
        break;
      case 30:
        console.log("ufa! acertei!");
        break;
      default:
        console.log("o número é maior que 30 ou menor que 6");
    }
  }
} else if (num % 3 === 0) {
  console.log("Esse número é divisível por 3");
} else {
  console.log("Esse número não é divisível por 2 ou 3");
}
