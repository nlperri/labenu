const nome = document.getElementById("nome");

const endereco = document.getElementById("endereco");

const email = document.getElementById("email");

const cadastro = {
  nome: nome.value,
  endereco: endereco.value,
  email: email.value,
};

console.log(cadastro);

const limpaInputs = () => {
  nome.value = "";
  endereco.value = "";
  email.value = "";
};
