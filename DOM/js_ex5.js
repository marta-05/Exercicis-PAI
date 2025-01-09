let numEnllaços;

/****** Exercici 5.1 ******/
// a.	Número d'enllaços que hi ha a la pàgina
function e51a(){
	numEnllaços=document.links.lenght;
	alert("numero Links="+numEnllaços);
}

// b.	Adreça (URL) del penúltim enllaç
function e51b(){
	numEnllaços=document.links.lenght;
	if (numEnllaços >=2){
		const penultimEnllaç= document.links[numEnllaços-2].href;
		alert("URL"+penultimEnllaç);
	}else{
		alert("Només hi ha un");
	}
}
//c.	Numero d'enllaços que ho fan a http://www.uab.cat
function e51c(){
	let comtadorUAB=0;
	for(i=0;i<=document.links.length;i++){
		if (document.links[i]==="http://www.uab.cat"){
			comtadorUAB++;
			
		}
	}
}
//segona menera de com fer-ho



//d.	Número d'enllaços al tercer paràgraf.
function e51d(){

}
/****** Exercici 5.2 ******/
// a. Al final de dels paràgrafs existents.
function e52a(){ 

}
// b. Entre el segon i el tercer paràgraf.
function e52b(){

}


/****** Exercici 5.3 ******/
// Afegir "Salve Mundi!" a la llista en penúltima posició. 
function e53a(){	

}
// Canviar l'estil de la llista
function e53b(){
	
}


/****** Exercici 5.4 ******/
// Amagar el 2on paràgraf
function e54(){

}