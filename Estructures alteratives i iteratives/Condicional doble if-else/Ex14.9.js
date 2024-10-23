let conus_tarrina= prompt("Conus(c) o Tarrina (t)").toLowerCase();
let sabors= prompt("vainilla,xocolata, turró, menta, oreo, crema, gerds, ametlles").toLowerCase();
let preu_tipus=0;
let preu_final=0;
let error = false;

if (conus_tarrina === "c"){
    preu_tipus= 3.45
}else if (conus_tarrina=== "t"){
    preu_tipus=3.95
}else{
    error=true; 
}

if (sabors=== "vainilla"||sabors==="xocolata"){
    preu_final= preu_tipus
}else if (sabors=== "turró"|| sabors==="menta"|| sabors==="oreo" ){
    preu_final= preu_tipus +0.5
}else if (sabors=== "crema"||sabors==="gerds"||sabors==="ametlles"){
    preu_final= preu_tipus + 1
}

if (error){
    console.log("dades mal introduides")
}
else{
    console.log("Preu"+preu_final+"$")
}
    