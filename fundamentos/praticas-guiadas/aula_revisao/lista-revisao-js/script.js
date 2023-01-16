const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function retornaContasComSaldoAtualizado(contas) {
  for (let i of contas) {
    let valorParaDebitar = 0;

    for (let j of i.compras) {
      valorParaDebitar += j;
    }

    contas.saldoTotal -= valorParaDebitar;
    contas.compras = [];
  }

  return contas;
}

console.log(retornaContasComSaldoAtualizado(contas));
