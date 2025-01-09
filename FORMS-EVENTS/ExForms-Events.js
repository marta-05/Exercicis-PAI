//6.2
let resultats=""
//form1
resuultats=+document.formulari1.firstname.value;
resultats0=+document.formulari2.lastname.value;
//form2
let element= document.formulari2.opcions;
let i=0;
while(i<element.length && !element[i].checked){
    i++
}
if(element[i].checked){
    resultat+=element[i].value;
}
//form3
let elements=document.formulari3.check;
let x =0;
for(x=0;x<=elements.length;i++){
    if(elements[x].checked){
        resultat+=elements[x].value
    }
}

//form4
resultats+=document.getElementById("options").options[2].value
document.getElementById("resultats").innerHTML=resultats

//6.3

function comprovarcorreu(){
    let correu=document.getElementsByName("correu");
    let errors=false;
    let primera= correu[0].value.indexOf("@");
    let ultima= correu[0].value.lastIndexOf("@");

    if(primera = -1){
        errors=true;
    }
    if(primera!=ultima){
        errors=true;
    }
    if(errors){
        alert("hi ha errors")
    }else{
        alert("")
    }
}
//6.4
function enviar(){
    document.getElementById("resultats").innerText="Processant el formulari";
    document.getElementById("botoenviar").disabled=true;
}