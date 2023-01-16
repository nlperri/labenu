// function multiplicarPor3(array) {
//   const novoArray = [];
//   for (let i of array) {
//     novoArray.push(i * 3);
//   }
//   return novoArray;
// }

// const retornaPares = (array) => {
//   const novoArray = [];
//   for (let i of array) {
//     if (i % 2 === 0) {
//       novoArray.push(i);
//     }
//   }
//   return novoArray;
// };

// const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrayNumeros2 = [7, 3, 6, 8, 4, 2, 5];

// // console.log(multiplicarPor3(arrayNumeros));

// // console.log(retornaPares(arrayNumeros2));

// //////////////////////Callbacks//////////////////////////

// // Crie uma função que deve receber como parâmetros um array e uma função. O corpo da função deve chamar a função callback, passando o array argumento e guardando o valor do novo array em uma variável. Em seguida, esta função vai imprimir os valores do novo array no console.

// function imprimir(array, callback) {
//   const novoArray = callback(array);
//   console.log(novoArray);
// }

// // Faça duas chamadas da função acima, passando, em cada chamada, um array e uma das funções criadas anteriormente como callback.

// // imprimir(arrayNumeros, multiplicarPor3);
// // imprimir(arrayNumeros, retornaPares);

// //////////////////////// map()//////////////////////////

// // Refaça o item “A primeira deve receber um array de números, e retornar todos os números do array, multiplicados por 3”, dessa vez utilizando a função de array map().

// function multiplicaPor3map(array) {
//   return array.map((numero) => {
//     return numero * 3;
//   });
// }

// imprimir(arrayNumeros, multiplicaPor3map);

// const novoArray = multiplicaPor3map(arrayNumeros2);

// console.log(novoArray);

// /////////////////filter()//////////////////////

// //Refaça o item “A segunda deve receber um array de números, e retornar um array apenas com os números pares”, dessa vez utilizando a função filter()

// function retornaParesFilter(array) {
//   return array.filter((numero) => numero % 2 === 0);
// }

// imprimir(arrayNumeros, retornaParesFilter);

////////////////exercício fixação///////////////////

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];

// //Com o array de pokémons do template, faça o seguinte:
// Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;

const cura = (pokemon) => {
  // return { ...pokemon, vida: 100 }
  pokemon.vida = 100;
  return pokemon;
};

console.log(cura(pokemons[0]));

// Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;

const pokemonsVidaCheia = pokemons.map((pokemon) => {
  return cura(pokemon);
});

console.log(pokemonsVidaCheia);

// Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback, que deve retornar apenas os pokemons do tipo fogo.

const pokemonsDeFogo = pokemons.filter((pokemon) => {
  return pokemon.tipo === "fogo";
});

console.log(pokemonsDeFogo);
