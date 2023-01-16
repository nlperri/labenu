const paragrafo = document.getElementById("paragrafo");

console.log(paragrafo.innerHTML);

const changeValue = () => {
  const text = document.getElementById("texto");
  console.log(text.value);
};

const changeText = () => {
  const newText = document.getElementById("texto");
  paragrafo.innerHTML = newText.value;
};
