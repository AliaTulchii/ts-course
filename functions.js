"use strict";
function sum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
const result = sum(1, 2);
// const result2 = sum("1",2)
console.log("result:", result);
const multiply = (numberOne, numberTwo) => numberOne * numberTwo;
console.log("multiply", multiply(2, 3));
function sayHello(name = "TypeScript") {
    return `Hello ${name}`;
}
