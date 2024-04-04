
function x(){
  var a = 7;
 function y()
    {
        console.log(a);
    }
    a = 100;

    return y;

}

var z = x();
// console.log(z); // output : [function :y]

//function along with lexical scope called closure.
//A closure is the combination of a function and the variables that are accessible from that function.

z(); // output: 7  ... When we return the function only function is not return it will also return the lexical scope of each function with the variable scope this is called closures.

// Function along with its lexical scope bundle together forms a closure ---- Important


console.log("Next Function");


function a()
{
  var i = 900
  function x(){
    var j = 7;
   function y()
      {
          console.log(a);
      }
      j = 100;
  
     y();
  
  }
  x();
}

a();


///////////////////////////////////////

console.log("Counter Function")


function counter()
{
  var count = 0;
  this.increment = function()
  {
    count++;
    console.log(count);
  }
  this.decrement = function()
  {
    count--;
    console.log(count);
  }

}

var c = new counter();
c.increment();
c.increment();
c.decrement();
