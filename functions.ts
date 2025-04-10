function sum(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo
}

const result = sum(1,2)
// const result2 = sum("1",2)

console.log("result:", result)

const multiply = (numberOne: number, numberTwo: number): number => 
    numberOne * numberTwo
console.log("multiply", multiply(2,3))

function sayHello(name = "TypeScript"): string {
    return `Hello ${name}`
}

console.log(sayHello())

function sayHelloOptional(name?: string): string {
    return `Hell0, ${name || ""}`
}