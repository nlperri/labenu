// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((num) => num % 2 === 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  //   let newArray = [];
  //   for (let i in array) {
  //     if (array[i] % 2 === 0) {
  //       newArray.push(array[i] ** 2);
  //     }
  //   }
  //   return newArray;

  const numerosPares = array.filter((numero) => {
    return numero % 2 === 0;
  });
  const resultado = numerosPares.map((numero) => {
    return Math.pow(numero, 2);
  });
  return resultado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  array.sort(function (a, b) {
    return b - a;
  });
  return array[0];
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const obj = {};
  let menorNumero;
  if (num1 > num2) {
    obj.maiorNumero = num1;
    menorNumero = num2;
  } else {
    obj.maiorNumero = num2;
    menorNumero = num1;
  }
  obj.maiorDivisivelPorMenor = obj.maiorNumero % menorNumero === 0;
  obj.diferenca = obj.maiorNumero - menorNumero;

  return obj;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
  for (let i = 0; numerosPares.length < n; i++) {
    if (i % 2 === 0) {
      numerosPares.push(i);
    }
  }
  return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA == ladoB && ladoA == ladoC) {
    return `Equilátero`;
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    return `Isósceles`;
  } else {
    return `Escaleno`;
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novaArray = [];
  array.sort((a, b) => a - b);
  console.log(array);
  novaArray.push(array.at(-2));
  novaArray.push(array[1]);
  return novaArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  //   let textoAtores = "";
  //   for (i in filme.atores) {
  //     if (i >= filme.atores.length - 1) {
  //       textoAtores += `${filme.atores[i]}`;
  //     } else {
  //       textoAtores += `${filme.atores[i]}, `;
  //     }
  //   }

  return `Venha assistir ao filme ${filmeD.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let novaPessoa = { ...pessoa, nome: `ANÔNIMO` };
  return novaPessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = [];
  for (pessoa of pessoas) {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      pessoasAutorizadas.push(pessoa);
    }
  }
  return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = [];
  for (i in pessoas) {
    if (
      pessoas[i].altura < 1.5 ||
      pessoas[i].idade <= 14 ||
      pessoas[i].idade >= 60
    ) {
      pessoasNaoAutorizadas.push(pessoas[i]);
    }
  }
  return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (let conta of contas) {
    let valorParaDebitar = 0;

    for (let compra of conta.compras) {
      valorParaDebitar += compra;
    }

    conta.saldoTotal -= valorParaDebitar;
    conta.compras = [];
  }

  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a, b) => {
    x = a.nome;
    y = b.nome;
    return x == y ? 0 : x > y ? 1 : -1;
  });
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  return consultas.sort((a, b) => {
    // console.log(new Date(a.dataDaConsulta.split("/").reverse()));
    x = new Date(a.dataDaConsulta.split("/").reverse()).getTime();
    y = new Date(b.dataDaConsulta.split("/").reverse()).getTime();
    return x - y;
  });
}
