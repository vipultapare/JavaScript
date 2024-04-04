
// function statement also called function  declaration....

a(); // will print
function a(){
  console.log("Function Statement");
}


a();


// function expression  or named  function expression
console.log(b); //  throws an error  or undefined
var b = function c(){
  console.log("Hello");
}

b();


// function statement and function expression are different by the hoisting.


/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Anonymous Function----

// Function without a name is called Anonymous function it does not have its own identity.
// Anonymous function used when the functions are used as values. It is assigned to the variable


 var c = function(){
    console.log( "Anonymus Function" );
}

c();






