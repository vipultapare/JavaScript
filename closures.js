
function x(){
  var a = 7;
  function y()
  {
    console.log(a);
  }
return y; 
}

var z = x();
console.log(z); // output : [function :y]

//function along with lexical scope called closure.
//A closure is the combination of a function and the variables that are accessible from that function.

z(); // output: 7  ... When we return the function only function is not return it will also return the lexical scope of each function with the variable scope this is called closures.

// Function along with its lexical scope bundle together forms a closure ---- Important