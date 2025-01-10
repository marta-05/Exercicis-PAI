function canviaText(){
    document.getElementById("resultats").innerText="text canviat"
}

function canviarEstil(){
    document.getElementById("resultats").classList.add("nou-estil")
}

function nouElement(){
    let llista= document.getElementById("Llista")
    let nouElement = document.createElememnt("li")
    llista.appendChild(nouElement);
}

function delate(){
    let list= document.getElementById("llista")
    list.removeChild(list.lastChild);
}

function changebackgraund(){
    document.body.style.backgroundColor="#ffff507";
}

function longitudParr(){
    let longitud= document.getElementById("resultats").length;
    console.log(longitud);
}

function mostrarAmagar(){
    let paragraf= document.getElementById("resultats");
    if(element.style.display ==="none"){
        element.style.display ="block"
    }else{
        element.style.display ="none"
    }
}

function canviarMida(){
    let paragraf = document.getElementById("resultats");
    let midaActual = window.getComputedStyle(paragarf).fontSize;
    let midaNova= parseInt(midaActual)+2;
    paragarf.style.fontSize= midaNova +"px";
}

function nombreIguals(){
    let paragarf= document.getElementById("resultats");
    i=0
    let comtador=0
    for(i=0;i<= paragraf.length;i++){
        if (i=== 1)
            comptador++
    }
    return comptador
    
}

function canviElements(){
    let elements= document.getElementByClassName("parell")
    element.innerHTML="NOU TEXT"
}
