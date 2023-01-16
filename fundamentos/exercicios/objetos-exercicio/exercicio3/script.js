const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5,
};

//Letra a)

const pokemon2 = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água",
};

//Letra b)

pokemon1.ataques = [];

//Letra c)

const ataque = {
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100,
};

pokemon1.ataques.push(ataque);

//Letra d)

pokemon2.ataques = [...pokemon1.ataques];

// Letra e)

pokemon1.ataques.push({
  nome: "Folha Navalha",
  dano: 45,
  tipo: "Grama",
  precisao: 100,
});

// Letra f)

pokemon2.ataques.push({
  nome: "Jato de Água",
  dano: 40,
  tipo: "Água",
  precisao: 100,
});

// Letra g)

console.log(pokemon1);
console.log(pokemon2);
