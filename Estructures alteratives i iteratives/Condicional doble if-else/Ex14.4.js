let num1=parseFloat(prompt("Num1"));
let num2=parseFloat(prompt("Num2"));
let num3=parseFloat(prompt("Num3"));

if (num1>=num2 && num1>=num3) {
    console.log(num1);
} else if (num2>= num1 && num2>=num3){
    console.log(num2);
} else{
    console.log(num3);
}
