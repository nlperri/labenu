console.log("- Operadores -");

let saldo = 15;

saldo = (saldo + 22.4 - 12.34) / 3;

console.log(
  `Após dividir o dinheiro igualmente com meus dois irmãos, o saldo para cada um ficou de ${saldo.toFixed(
    2
  )}`
);

saldo = saldo * 3.42;

console.log(
  `Após aplicar minha parte do dinheiro, o novo saldo foi de ${saldo.toFixed(
    2
  )}`
);

let resto;

resto = saldo % 3;

saldo = (saldo - resto) / 3;

console.log(
  `O saldo dividido por três foi de ${saldo} 
O resto da divisão do saldo para comprar um chicletinho foi de ${resto.toFixed(
    2
  )}`
);
