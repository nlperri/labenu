////////// usando ifs aninhados

const num = +prompt(`Digite um número`);
if (num % 2 === 0 && num % 3 === 0) {
  console.log(`${num} é divisível por 2 e 3`);
} else if (num % 2 === 0) {
  console.log(`${num} é divisível por 2 ou 3`);
} else if (num % 3 === 0) {
  console.log(`${num} é divisível por 2 ou 3`);
} else {
  console.log(`${num} não é divisível por 2 ou 3`);
}

////////// usando operadores lógicos

if (num % 2 === 0 || num % 3 === 0) {
  if (num % 2 === 0 && num % 3 === 0) {
    console.log(`${num} é divisível por 2 e 3`);
  } else {
    console.log(`${num} é divisível por 2 ou 3`);
  }
} else {
  console.log(`${num} não é divisível por 2 ou 3`);
}
