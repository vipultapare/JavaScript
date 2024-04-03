
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