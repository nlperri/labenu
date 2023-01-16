"use strict";
//Parte 1

let op1 = 5 > 20 && 5 < 2;

let op2 = 5 == 5 || 5 == "5";

let op3 = !(20 > 50);

let op4 = !(20 > 50 || 50 > 70);

console.log(` 5 > 20 && 5 < 2: ${op1} \n
              5 == 5 || 5 == "5": ${op2} \n
              !(20 > 50): ${op3} \n
              !(20 > 50 || 50 > 70): ${op4}   
`);

//Parte 2

const salFix = 2000;
const auxCr = 45.5;

const jan = 5784.5;
const feb = 3418.4;
const mar = 4124.1;
const apr = 1874;
const mai = 7000;
const jun = 9450;

const totalCom = (jan + feb + mar + apr + mai + jun) * 0.1;

const descInss = 0.05;

let calc1 = salFix + auxCr * 2;
console.log(`Salário fixo mais auxílio creche: ${calc1.toFixed(2)}`);

let comJan = jan * 0.1;
console.log(`Comissão de janeiro: ${comJan.toFixed(2)}`);

let descJan = (salFix + comJan) * 0.05;
console.log(`Desconto de janeiro pelo INSS: ${descJan.toFixed(2)}`);

let totalJan = salFix + jan * 0.1 + auxCr * 2 - (salFix + jan * 0.1) * descInss;
console.log(`O salário de janeiro foi de: ${totalJan.toFixed(2)}`);

let totalFeb = salFix + feb * 0.1 + auxCr * 2 - (salFix + feb * 0.1) * descInss;
console.log(`O salário de fevereiro foi de: ${totalFeb.toFixed(2)}`);

let totalMar = salFix + mar * 0.1 + auxCr * 2 - (salFix + mar * 0.1) * descInss;
console.log(`O salário de março foi de: ${totalMar.toFixed(2)}`);

let totalApr = salFix + apr * 0.1 + auxCr * 2 - (salFix + apr * 0.1) * descInss;
console.log(`O salário de abril foi de: ${totalApr.toFixed(2)}`);

let totalMai = salFix + mai * 0.1 + auxCr * 2 - (salFix + mai * 0.1) * descInss;
console.log(`O salário de maio foi de: ${totalMai.toFixed(2)}`);

let totalJun = salFix + jun * 0.1 + auxCr * 2 - (salFix + jun * 0.1) * descInss;
console.log(`O salário de junho foi de: ${totalJun.toFixed(2)}`);

let mediaSal =
  (totalJan + totalFeb + totalMar + totalApr + totalMai + totalJun) / 6;
console.log(`A média do salário em seis meses é de: ${mediaSal.toFixed(2)}`);
