let N=parseInt(prompt("N:"));
let M=parseInt(prompt("M:"));
suma=0;

for (i=1;i<=M;i++){
    element="";
    for(x=1;x<=i;i++){
        element+=N;
    }
    suma+=parseInt(element);
    console.log(element);        
}
console.log(suma);