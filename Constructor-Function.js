
function Counter()
{
  var count = 0;
  this.increament = function (){
    count++;
    console.log(count);
  }

  this.decreament = function (){
    count--;
    console.log(count);
  }
}


var c = new Counter();
c.increament(); //1
c.increament(); //2
c.decreament();

// Disadvantage of closure -- 
// Over consumption of memory
// Not garbage collected well till the program expires
// Memory Leaks if not handles properly
//