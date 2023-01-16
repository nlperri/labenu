const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

const triplos = arrayNumeros.map((numero) => {
  return numero * 3;
});

console.log(triplos);

const metades = arrayNumeros.map((numero) => {
  return numero / 2;
});

console.log(metades);
