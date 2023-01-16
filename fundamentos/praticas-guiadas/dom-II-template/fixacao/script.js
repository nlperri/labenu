const list = document.getElementById("lista");

const insereItem = (event) => {
  event.preventDefault();
  const newFruit = document.getElementById("meu-input");
  const newLi = document.createElement("li");
  newLi.innerHTML = newFruit.value;
  list.appendChild(newLi);

  newFruit.value = "";
};
