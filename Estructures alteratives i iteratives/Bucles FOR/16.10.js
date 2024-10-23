let N=parseInt(prompt("N:"));
let element="";

for(i=1;i<=N;i++){
    for (m=1;m<=i;i++)
        element+= "*";
    
}
document.write(element)