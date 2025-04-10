const myString: string = " hello";
const myNumber: number = 17;
const myBoolean: boolean = false;

const undefinedVariable: undefined = undefined;
const nullVariable: null = null;

const bigIntNumber: bigint = 100n;
const symbolVariable: symbol = Symbol("mySymbol");

//Type inference

let myStringInfered = "Hello people";

//Object types

const stringArray: string[] = ["apple", "cherry", "mango"];

type User = { name: string; age: number; isActive: boolean };

const user: User = {
  name: "Alia",
  age: 42,
  isActive: true,
};
