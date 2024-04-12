const radius = [2,3,4,5,6];
const area = (radius) => {
  return Math.floor(Math.PI*radius*radius);
}

const circumference = (radius) => {
  return Math.floor(2 * Math.PI*radius);
}

const diameter = (radius) => {
  return 2 * radius;
}


const calculate = (radius , logic) => {
     const output = [];

     for(let i = 0 ; i<radius.length;i++)
     {
       output.push(logic(radius[i]));
     }

     return output;
}


console.log(calculate(radius , area));