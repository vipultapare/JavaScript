
// Callback function

 // Functions are first class citizens 
  // Functions which is passsed to the another function.

  // Javascript is a sychronous language.
   // but due to callbacks we can do asynchronus operations.

   function x()
   {

   }

   x(function y(){

   })

   // function y is called callback function

  // function which is passed in settimed out is called call back function..
   setTimeout(function(){
    console.log("Hello World");
},2000);

 function a(b)
 {
  console.log("a");
  b();
 }

 a(function b()
 {
  console.log("b");
 })


 // Everything which is executed in js is executed throught the call Stack.
   