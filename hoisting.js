
getName(); // Namaste React
console.log(x);  // undefined  if we remove the var x = 7 then it will throw the error.
var x = 7;
 // get()  - will throw the error like it is not a function , it will behave like a variable.

function getName(){
  console.log("Namaste React");
}

console.log(x); //7

// This is called Hoisting:
//Even before executing the code it first store the memory for the variables and functions.

var get = ()=>{
  console.log("hii");
}

get();  //now it will execute the code.
