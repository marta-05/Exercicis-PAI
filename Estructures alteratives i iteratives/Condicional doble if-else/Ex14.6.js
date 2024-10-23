let carnet= prompt("Tens carnet de conduïr:");
let  prova_alcholemia= parseFloat(prompt("Taxa alcholemia:"));

if (carnet ==="Si" && prova_alcholemia<=0.25){
    document.write("Pots conduir")
}else{
    document.write("No pots conduir")

}