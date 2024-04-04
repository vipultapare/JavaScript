 
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

// we cannot access let and const outside the block but we can access the var outside the block.



// What is Shadowning:
//Variable shadowing occurs when a variable with the same name is declared in an inner scope, such as a function or a block, as a variable in an outer scope. In such cases, the variable in the inner scope shadows or hides the variable in the outer scope. This means that any references to the variable within the inner scope will refer to the inner variable, effectively "shadowing" the outer variable.


console.log("Shadowing:")
a = 100;

{
 var a = 10;
}




console.log(a);