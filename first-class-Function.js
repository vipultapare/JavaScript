// Passing one function inside the function and we can also return the function

// This is called the first class function, the ability to used functions as a values and assigned to variables and to passed as a arguments or to return a function as a value called as first class functions.


var b = function()
{
  return function (){

  }
}

console.log(b());

////////////////////////////
var c = function (param)
{
  console.log(param);
}

function d()
{
  
}

console.log(c(d));
///////////////////////


 // if we used let and const  this we act same as var..