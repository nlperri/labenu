const fruits = ["laranja", "limão", "uva"];

for (i = 0; i <= fruits.length - 1; i++) {
  document.getElementById(`fruta-${i + 1}`).innerHTML = fruits[i];
}
console.log(fruits);

const newFruit = document.getElementById("newFruit");

const valueNewFruit = () => {
  console.log(newFruit.value);
};

const addFruits = () => {
  if (fruits.length === 3) {
    fruits.push(newFruit.value);
    const fruit4 = document.getElementById("fruta-4");
    fruit4.innerHTML = fruits[3];
    console.log(fruits);
  } else {
    fruits.push(newFruit.value);
    const list = document.getElementById("lista-de-frutas");
    list.innerHTML += `<li id="nova-fruta">${newFruit.value}</li`;
    console.log(fruits);
  }
};
