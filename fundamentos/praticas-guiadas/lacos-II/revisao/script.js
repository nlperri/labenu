const clientes = [
  { nome: "João", compras: [] },
  {
    nome: "Maria",
    compras: [
      {
        produto: "short",
        quantidade: 2,
        cores: ["azul", "verde"],
      },
    ],
  },
  {
    nome: "joaquina",
    compras: [
      {
        produto: "macacão",
        quantidade: 1,
        cores: ["jeans"],
      },
      {
        produto: "calcinha",
        quantidade: 2,
        cores: ["preto", "rosa"],
      },
    ],
  },
  { nome: "marcos", compras: [] },
];

const clientesSemCompra = [];

for (let i = 0; i < clientes.length; i++) {
  if (clientes[i].compras.length === 0) {
    clientesSemCompra.push(clientes[i]);
  }
}

console.log(clientesSemCompra);

for (let i = 0; i < clientes.length; i++) {
  for (let j = 0; j < clientes[i].compras.length; j++) {
    for (let k = 0; k < clientes[i].compras[j].cores.length; k++) {
      console.log(clientes[i].compras[j].cores[k]);
    }
  }
}

for (const cliente of clientes) {
  for (const compra of cliente.compras) {
    for (const cor of compra.cores) {
      console.log(cor);
    }
  }
}
