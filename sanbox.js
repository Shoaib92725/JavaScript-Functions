const number = 10.9;
console.log(number);

console.log(Math);

const number2 = 9.6;

console.log(Math.round(number));
console.log(Math.floor(number));
console.log('max number is : '+Math.max(number,number2));
console.log('min number is : '+Math.min(number,number2));
console.log(Math.ceil(number));

//printing random numbers b/w 1-100
const randomValue = Math.random();
console.log('Random values in range of 1 -100 : '+Math.round(randomValue*100));

console.log(Math.trunc(number));
