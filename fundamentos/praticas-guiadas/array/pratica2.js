const num = [5, 36, 89, 76];

const num2 = num.slice();

console.log(num2);

num2.pop();

console.log(num2);

num2.push(6);

console.log(num2);

num2.splice(2, 1);

console.table(num);
console.table(num2);
