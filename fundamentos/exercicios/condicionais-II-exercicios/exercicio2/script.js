let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase().trim();

function info(nacionalidade) {
  switch (nacionalidade) {
    case "brasileira":
      console.log(
        `Sua nacionalidade ${nacionalidade} está inclusa no programa.`
      );
      break;
    case "argentina":
      console.log(
        `Sua nacionalidade ${nacionalidade} está inclusa no programa.`
      );
      break;
    case "uruguaia":
      console.log(
        `Sua nacionalidade ${nacionalidade} está inclusa no programa.`
      );
      break;
    case "chilena":
      console.log(
        `Sua nacionalidade ${nacionalidade} está inclusa no programa.`
      );
      break;
    case "colombiana":
      console.log(
        `Sua nacionalidade ${nacionalidade} está inclusa no programa.`
      );
      break;
    default:
      console.log(`Sua nacionalidade não está inclusa no programa.`);
  }
}

info(nacionalidade);
