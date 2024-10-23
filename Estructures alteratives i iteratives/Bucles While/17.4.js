let N=parseInt(prompt("N:"));
let a=1,b=1,suma=0;
let i=1
console.log(a)
if(N>1){
    console.log(b);
}

while(i <= N-1){
    suma=a+b;
    console.log(suma);
    a=b;
    b=suma;
    i++;
}