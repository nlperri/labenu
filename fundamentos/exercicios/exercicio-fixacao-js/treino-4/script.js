const array = [1, 4, 8, 2, 5, 4, 2, 4, 7, 5];

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let result = 0;
  if (arrayDeNumeros.includes(numeroEscolhido)) {
    for (i in arrayDeNumeros) {
      arrayDeNumeros[i] === numeroEscolhido ? (result += 1) : 0;
    }
    return `O número ${numeroEscolhido} aparece ${result}x`;
  } else {
    return `Número não encontrado`;
  }
}

console.log(contaOcorrencias(array, 4));
