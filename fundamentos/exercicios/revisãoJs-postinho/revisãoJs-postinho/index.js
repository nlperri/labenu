// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b
// Exemplo:

function checarDesigualdade(a, b) {
  return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`;
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
  //  Sua lógica aqui
}

// c-)Faça uma função chamada "verificaSeEMaior"

const verificaSeEMaior = (a, b) => {
  a > b
    ? console.log(`${a} é maior que ${b}`)
    : console.log(`${a} não é maior que ${b}`);
};

console.log(verificaSeEMaior(321, 2156));

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= false
// e-) 0!==null= true

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

function cadastro(nome, nasc, senha, nac) {
  const usuario = [];
  if (nasc > 18 && senha.length >= 5 && nac === "brasileira") {
    usuario.push({
      nome: nome,
      nascimento: nasc,
      senha: senha,
      nacionalidade: nac,
    });
  }
  return usuario;
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

function login(senha) {
  senha === "labenu"
    ? console.log(`Usuário Logado`)
    : console.log(`Senha inválida`);
}

login("labenu");

// Exercício 5----------------------------------------------------------------------------------------------------
function primeiraDose(nome, vac) {
  let tempo;
  if (vac.toLowerCase() === "coronavac") {
    tempo = 28;
  } else if (
    vac.toLowerCase() === "astrazenica" ||
    vac.toLowerCase() === "pfizer"
  ) {
    tempo = 90;
  }
  // let data = new Date(2022, 11, 20).toLocaleDateString("pt-BR");

  // let day = Date.getDate()
  // let month = Date.getMonth() +1
  let data = new Date(Date.now());
  data.setDate(data.getDate() + tempo);

  return `Olá ${nome}! A próxima dose da ${vac} é daqui a ${tempo} dias. Compareça no posto na data ${data.toLocaleDateString(
    "pt-BR"
  )}`;
}

// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

function segundaDose(nomeDoUsuario) {
  const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "incompleta" },
    { nome: "Carlos", imunizacao: "incompleta" },
  ];

  for (i in usuarios) {
    if (usuarios[i].nome === nomeDoUsuario) {
      usuarios[i].imunizacao = "completa";
      return usuarios[i];
    }
  }
}

console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

function avisoAosAtrasados() {
  const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "completa" },
    { nome: "Carlos", imunizacao: "incompleta" },
  ];

  for (i in usuarios) {
    if (usuarios[i].imunizacao === "incompleta") {
      console.log(
        `Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
      );
      continue;
    }
  }
}
console.log(avisoAosAtrasados());

// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
  {
    nome: "Artur",
    ano: 2000,
    nacionalidae: "brasileiro",
    senha: "123456",
    vacina: "pfizer",
    imunizacao: "incompleta",
  },
  {
    nome: "Bárbara",
    ano: 1984,
    nacionalidae: "brasileira",
    senha: "labenu",
    vacina: "astrazenica",
    imunizacao: "completa",
  },
  {
    nome: "Carlos",
    ano: 2000,
    nacionalidae: "brasileiro",
    senha: "123456",
    vacina: "coronavac",
    imunizacao: "incompleta",
  },
];

function cadastro2(nome, nasc, senha, nac) {
  if (nasc > 18 && senha.length >= 5 && nac === "brasileira") {
    usuarios.push({
      nome: nome,
      nascimento: nasc,
      senha: senha,
      nacionalidade: nac,
    });
  }
  return usuarios;
}

console.log(cadastro());

const login = (senha) => {
  let a = "";
  for (i in usuarios) {
    if (usuarios[i].senha === senha) {
      a = `Usuário ${usuarios[i].nome} Logado`;
      console.log(a);
      break;
    }
  }
  if (a == "") {
    console.log("Senha Inválida");
  }
};

console.log(login());

const primeiraDose = () => {
  for (i in usuarios) {
    usuarios[i].vacina = "";
    usuarios[i].imunizacao = "incompleta";
  }
  return usuarios;
};

console.log(primeiraDose());

const segundaDose = (nomeDoUsuario) => {
  for (i in usuarios) {
    if (usuarios[i].nome === nomeDoUsuario) {
      usuarios[i].imunizacao = "completa";
    }
  }
  return usuarios;
};

console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {};
console.log(avisoAosAtrasados());
