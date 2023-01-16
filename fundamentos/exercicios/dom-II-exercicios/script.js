const container = document.getElementById("container");
const newItem = document.querySelector(".item");

const adicionaItem = (event) => {
  ////////PRIMEIRO JEITO///////////
  // const newItem = `<article class="item" onclick="removeItem(event)"></article>`;
  // container.insertAdjacentHTML("beforeend", newItem);

  /////////SEGUNDO JEITO//////////

  // const newArticle = document.createElement("article");
  // newArticle.classList.add("item");
  // newArticle.setAttribute("onclick", "removeItem(event)");
  // container.insertAdjacentElement("beforeend", newArticle);

  ///////TERCEIRO JEITO/////////

  const cloneItem = newItem.cloneNode();
  container.appendChild(cloneItem);
};

const removeItem = (event) => {
  // event.target.remove();
  container.removeChild(event.target);
};
