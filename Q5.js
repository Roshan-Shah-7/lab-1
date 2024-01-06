// Build in functions
let string = "Hello, from Roshan";
console.log(`${string.toUpperCase()}: '.toUpperCase()' to get uppercase. \n`);
console.log(`${string.toLowerCase()}: '.toLowerCase()' to get lowercase.\n`);
console.log(`${string.length}: '.length' to check length of string.\n`);
console.log(`${string.indexOf('Roshan')}: 'indexOf()' to check index of a particular world.\n`);

console.log(`${Math.random()}: 'Math.random()' this generate random numbers.\n`);
console.log(`${Math.floor(4.9)}: 'Math.floor()' this will rounds a number down to the nearest integer.\n`);
console.log(`${Math.sqrt(10)}: 'Math.sqrt()' to fing square root.\n`);

let currentDate = new Date();

console.log(`${currentDate.getMonth()}: 'getMonth()' to get month.\n`);
console.log(`${currentDate.getDate()}: 'getDate()' to get day of the month.\n`);
console.log(`${currentDate.getFullYear()}: 'getFullYear()' to get curret year.\n`);

// User define functions
function greeting(name) {
    return `Hello, ${name} !.\n`
}
console.log(greeting("Roshan"));

let add = function (a, b) {
    return a + b;
}
console.log(add(10, 5));


let multiply = (x, y) => x * y;
console.log(multiply(10, 5));

function performOperation(r, s, operation) {
    return operation(r, s)
}

console.log(performOperation(10, 10, add)); // call back function