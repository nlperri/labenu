const carrinho = {
  nome: "Natália",
  pagamento: "débito",
  endereco: "Rua do Catete 42",
};

carrinho.compras = [
  {
    nome: "peito de frango",
    preco: 22.0,
    quantidade: 1,
  },
  { nome: "chocolate", preco: 9.99, quantidade: 2 },
];

const carrinhoPresente = {
  ...carrinho,
  nome: "Cristiane",
  pagamento: "cartão presente",
};

console.log(carrinhoPresente);

const quantidadeTotal =
  carrinho.compras[0].quantidade + carrinho.compras[1].quantidade;

console.log(`Você possui ${quantidadeTotal} produtos no seu carrinho.`);

console.log(carrinho.compras.length);
