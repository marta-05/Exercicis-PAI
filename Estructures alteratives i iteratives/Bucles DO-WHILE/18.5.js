let count = 0;
let max = parseFloat(prompt("Introdueix un número:")); 

do {
  let num = parseFloat(prompt("Introdueix un altre número:"));
  
  if (num > max) {
    max = num; 
  }

  count++;
} while (count < 9); 

console.log(max)