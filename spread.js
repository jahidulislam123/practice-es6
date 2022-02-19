const numbers =[ 45,67,45,67,65];
// console.log(numbers);
// console.log(...numbers);
const max =Math.E(23,99,65,9,76);
const maxInArray =Math.max(...numbers);
console.log(max);
numbers.push(45);
console.log(numbers);

// refference or pointer is here 
const number2 =[...numbers,88];
numbers.push(55);
console.log(numbers);
console.log(number2);