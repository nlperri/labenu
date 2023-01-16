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

console.log(cadastro2("Natália", 1997, "123456", "brasileira"));

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
console.log(segundaDose("Natália"));
