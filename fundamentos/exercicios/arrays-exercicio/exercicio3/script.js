const num = [65, 78, 34, 26];
const stng = ["sapato", "blusa", "calça", "cinto"];
const nsb = [100, "roupas", 78 > 34];

const numCopy = num.slice();

/////Parte 1

numCopy.unshift(99);
console.log(num);
console.log(numCopy);

/////Parte 2

const stngCopy = stng.slice();
stngCopy.pop();
console.log(stng);
console.log(stngCopy);

//////Parte 3

const nsbCopy = nsb.slice();
nsbCopy.splice(1, 1);
console.log(nsb);
console.log(nsbCopy);
