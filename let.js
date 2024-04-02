//Let and Const declaration are hoisted..
//let and const get memory in different  ways other than global space.  and thats why we cannot access this variables before initializing it.
console.log(b); //undefined
console.log(a); // will throw an error  because it is not declared yet 
let a = 10;
var b = 100;
