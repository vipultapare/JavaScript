 
 var a = 100;
 {
  let a = 12;
  var b = 10;
  const c = 15;

  //a and c will get block scope.
  // b will get global scope.
 }

// console.log(a); //error
 console.log(b); //10 - Known as shadowing
 // console.log(c); // error

// we cannot access let and const outside the bloxk but we can access the var outside the block.

