

console.log("Start");

setTimeout(()=>{
     console.log("callback")
}, 5000);

let startDate = new Date().getTime();

let enddate = startDate;

while(enddate <= startDate + 5000)
{
  enddate = new Date().getTime();
}

console.log("END");