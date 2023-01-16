const ingredientes = ["farinha", "açúcar", "ovo"];

const quantidades = [100, 50, 2];

const processos = ["ovos", 2, true];

const gramas = [150];

const bolo = [];

const receita = [ingredientes, quantidades];

console.table(receita);

quantidades[2] = 4;

console.table(receita);

///Parte 2

console.log(ingredientes.length);
console.log(processos.includes("ovos"));
console.log(gramas[0]);
console.log(gramas.indexOf(150));
console.log(gramas.length);

//Parte 3

const novoIngredientes = ingredientes.slice();

novoIngredientes.push("Cacau em pó");

console.table(novoIngredientes);

novoIngredientes.splice(2, 2);

console.table(novoIngredientes);
