const objetos = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

const capsLock = (objeto) => {
  for (i in objeto) {
    objeto[i] = objeto[i].toUpperCase();
  }
  return objeto;
};

console.log(capsLock(objetos));

const textoCorrido = (objeto) => {
  let texto = "";
  for (i in objeto) {
    texto += ` ${i}: ${objeto[i]}`;
  }
  return texto;
};

console.log(textoCorrido(objetos));

const imprimir = (objeto, callback) => {
  const novoObjeto = callback(objeto);
  return novoObjeto;
};

console.log(imprimir(objetos, capsLock));

console.log(imprimir(objetos, textoCorrido));
