//////////////////// Prática 1 ////////////////////////////

// const bimestre1 = [10, 10, 10, 10];
// const bimestre2 = [2, 3, 8, 2];
// const bimestre3 = [10, 10, 7, 9];
// const bimestre4 = [5, 5, 5, 5];

// const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4];

// for (let i = 0; i < notasDoAno.length; i++) {
//   let somaDasNotas = 0;
//   let mediaDoBimestre = 0;

//   for (let j = 0; j < notasDoAno[i].length; j++) {
//     somaDasNotas += notasDoAno[i][j];
//   }

//   mediaDoBimestre = somaDasNotas / notasDoAno[i].length;

//   console.log(`A soma das notas do bimestre ${i + 1} é: ${somaDasNotas}`);

//   console.log(`A média do bimestre ${i + 1} é: ${mediaDoBimestre}`);
// }

//////////////////// Prática 2 ////////////////////////////

// for (let i in notasDoAno) {
//   let somaDasNotas = 0;
//   let mediaDoBimestre = 0;

//   for (let j of notasDoAno[i]) {
//     somaDasNotas += j;
//   }

//   mediaDoBimestre = somaDasNotas / notasDoAno[i].length;

//   console.log(`A soma das notas do bimestre ${+i + 1} é: ${somaDasNotas}`);

//   console.log(`A média do bimestre ${+i + 1} é: ${mediaDoBimestre}`);
// }

//////////////////// Prática 3 ////////////////////////////

const filmes = [
  {
    titulo: "O Auto da Compadecida",
    ano: 2000,
    diretor: "Guel Arraes",
    elenco: [
      "Selton Mello",
      "Mateus Nachtergaele",
      "Marco Nanini",
      "Fernanda Montenegro",
    ],
  },
  {
    titulo: "Carandiru",
    ano: 2001,
    diretor: "Hector Babenco",
    elenco: [
      "Wagner Moura",
      "José Carlos Vasconcelos",
      "Ailton Graça",
      "Caio Blat",
    ],
  },
  {
    titulo: "Aquarius",
    ano: 2012,
    diretor: "Kléber Mendonça Filho",
    elenco: [
      "Sônia Braga",
      "Humberto Carrão",
      "Maeve Jinkings",
      "Bárbara Colen",
    ],
  },
];

for (let i in filmes) {
  console.log(
    `\n\n
    ${filmes[i].titulo}\n
ano:${filmes[i].ano}\n
diretor:${filmes[i].diretor}\n
elenco:`
  );
  for (let j of filmes[i].elenco) {
    console.log(`\nAtor ${+filmes[i].elenco.indexOf(j) + 1}: ${j}`);
  }
}

///////outro método

for (let i in filmes) {
  console.log(
    `\n\n
    ${filmes[i].titulo}\n
ano:${filmes[i].ano}\n
diretor:${filmes[i].diretor}\n
elenco:`
  );
  for ([index, value] of filmes[i].elenco.entries()) {
    console.log(`\nAtor ${index + 1}: ${value}`);
  }
}
