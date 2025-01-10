// function canviaText(){
//     document.getElementById("resultats").innerText="text canviat"
// }

// function canviarEstil(){
//     document.getElementById("resultats").classList.add("nou-estil")
// }

// function nouElement(){
//     let llista= document.getElementById("Llista")
//     let nouElement = document.createElememnt("li")
//     llista.appendChild(nouElement);
// }

// function delate(){
//     let list= document.getElementById("llista")
//     list.removeChild(list.lastChild);
// }

// function changebackgraund(){
//     document.body.style.backgroundColor="#ffff507";
// }

// function longitudParr(){
//     let longitud= document.getElementById("resultats").length;
//     console.log(longitud);
// }

// function mostrarAmagar(){
//     let paragraf= document.getElementById("resultats");
//     if(element.style.display ==="none"){
//         element.style.display ="block"
//     }else{
//         element.style.display ="none"
//     }
// }

// function canviarMida(){
//     let paragraf = document.getElementById("resultats");
//     let midaActual = window.getComputedStyle(paragarf).fontSize;
//     let midaNova= parseInt(midaActual)+2;
//     paragarf.style.fontSize= midaNova +"px";
// }

// function nombreIguals(){
//     let paragarf= document.getElementById("resultats");
//     i=0
//     let comtador=0
//     for(i=0;i<= paragraf.length;i++){
//         if (i=== 1)
//             comptador++
//     }
//     return comptador
    
// }

// function canviElements(){
//     let elements= document.getElementByClassName("parell")
//     element.innerHTML="NOU TEXT"
// }

//1
let boto1= document.getElementById("canviatext");
boto1.addEventListener("click", funtion(){
    text= document.getElementById("text")
    text.innerText= "nou text"
});

//2
 let boto2= document.getElementById("afageixClasse")
 boto2.addEventListener("click",funtion(){
    document.getElementById("text").classList.add(textnou)
 });

//3
let boto3  = document.getElementById("AggeixLlista")
boto3.addEventListener("Click", funtion(){
    llista= document.getElementById("List")
    let nouEl =document.createElement("li")
    nouEl.textContent="Nouelement"

    llista.appendChild(nouEl)
});

//4
let boto4 = document.getElementById("borrar")

boto4.addEventListener("Click",funtion(){
    let llista= document.getElementById("llista")
    llista.removeChild(llista.lastchild)
});

//5
let boto5 = document.getElementById("fons")

bot05.adEventListner("Click", funtion(){
    document.body.style.background= #ff4589
});

//6
let boto6 = document.getElementById("contingut")
boto6.addEventListener("click",funtion(){
    document.getElementById("text").length
});

//7
let boto7= document.getElementById("mostrarAmagar");
boto6.addEventListener("click",funtion(){
    let parr=document.getElementById("text")
    if(parr.style.display==="block"){
        parr.style.display="none"
    }else{
        parr.style.display="block"
    }
});

//8
let boto8= document.getElementById("midaLetra");
boto8.addEventListener("click",funtion(){
    let parra= document.getElementById("text");
    let textactual= window.getComputedStyle(Prr).fontSize;
    let textnou = parseInt(textActual)+2

    parra.style.fontSize= textnou+"px";
});

//9
let boto9= document.getElementById("numelements")
boto9.addEventListener("click", funtion(){
    let comtar=document.getElemenyByClassName("options").length

})
//10
let boto10= document.getElementById("canvi")
boto9.addEventListener("click", funtion(){
    let element=document.getElemenyByClassName("options")
    for(i=0;i<=elment.lenght;i++){
       element[i].textContent="noutext"
    }
})