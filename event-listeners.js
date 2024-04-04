function attached()
{
  let count = 0;
  document.getElementById('clickMe').addEventListener("click",function xyz()
  {
   
  count++;
     alert(count);
  }
  )
}


attached();


// it is called back function


// Garbage Collection and remove event -Listeners

// Event listeners are heavy it takes more memmory. 
