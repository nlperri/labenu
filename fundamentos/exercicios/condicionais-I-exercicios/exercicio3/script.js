"use strict";
/* O programa aceita as seguintes nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;*/

const nacionalidade = prompt("Digite sua nacionalidade").toLowerCase();

function progNac(nacionalidade) {
  const countries = [
    "brasileira",
    "argentina",
    "uruguaia",
    "chilena",
    "colombiana",
  ];
  if (
    nacionalidade === countries[0] ||
    nacionalidade === countries[1] ||
    nacionalidade === countries[2] ||
    nacionalidade === countries[3] ||
    nacionalidade === countries[4]
  ) {
    console.log(
      `Sua nacionalidade é ${nacionalidade} e você pode participar do programa!`
    );
  } else {
    console.log(`Sua nacionalidade não está inclusa no programa.`);
  }
}

progNac(nacionalidade);

/////////////////////////////////////////////////////////
