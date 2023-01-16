const pratica3 = (loginDigitado, senhaDigitada) => {
  const loginArmazenado = "user@gmail.com";
  const senhaArmazeada = "bananinha";

  return loginArmazenado === loginDigitado && senhaArmazeada === senhaDigitada;
};

const digiteLogin = prompt("Digite login:");
const digiteSenha = prompt("Digite senha:");

if (pratica3(digiteLogin, digiteSenha) === true)
  console.log("Você será redirecionado");
else console.log("Login ou senha incorretos");
