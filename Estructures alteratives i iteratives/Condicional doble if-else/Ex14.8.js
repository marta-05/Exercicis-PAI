let compra=parseFloat(prompt("Quan val la compra:"));
let cost_total;
if (compra>=30){
    cost_total=compra
    console.log("Enviament gratuit, cost:"+ cost_total)
}
else{
    cost_total=compra+4.95
    console.log("Enviament: 4,95$. Cost Total:"+ cost_total )
}