const list = document.getElementById("lista");

//Criar elemento li

const firstItem = document.createElement("li");
const lastItem = document.createElement("li");

//Adicionar texto

const firstContent = document.createTextNode("Item 0");
const lastContent = document.createTextNode("Item 5");

//Adicionar texto na li

firstItem.appendChild(firstContent);
lastItem.appendChild(lastContent);

//Adicionar

list.insertAdjacentElement("afterbegin", firstItem);
list.insertAdjacentElement("beforeend", lastItem);
