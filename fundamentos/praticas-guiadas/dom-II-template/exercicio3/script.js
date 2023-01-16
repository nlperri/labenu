const mensagem = document.getElementById("mensagem");

const checaCaps = (event) => {
  console.log(event.key);
  //   if (event.key === "Shift")
  if (event.shiftKey) {
    mensagem.innerHTML = "SEGURANDO SHIFT";
  } else {
    mensagem.innerHTML = "";
  }
};
