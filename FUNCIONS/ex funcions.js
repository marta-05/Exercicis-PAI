// EX FUNCIONS 1

// 3.1
// function parellSenar(nombre) {
//     let resultat= ""
//     if (numbre%2 === 0 ){
//     resultat= "El nombre es parell";
//     }else{
//     resultat="El nombre es imparell";
//     }
//     return resultat;
// }

// 3.2
// function anyTraspas(any) {
//     let esTraspas = false;
//     if (any % 4 === 0) {
//       esTraspas = true;
//       if (any % 100 === 0 && any % 400 !== 0)
//         esTraspas = false;
//     }
//     return esTraspas;
//   }

//3.3
// function sumatori (n){
//     let sum =0;
//     for (let i=1;i<=n;i++){
//         sum += 1 /(i*i);
//     }
//     return sum;
    
// }

//3.4
// let avContinua= parseFloat(prompt("nota avContinua:"));
// let notaPr= parseFloat(prompt("nota Pràctiques:"));
// let notaEx= parseFloat(prompt("nota Exàmen:"));

// function calculNotaFinal(avContinua,notaPr,notaEx){
//     let notaFinal=0;
//     if (avContinua >= 5){
//         notaFinal =  0,2 * avContinua + 0,4 * notaPr + 0,4 * notaEx;
//     }else{
//         notaFinal=  0,4 * notaPr + 0,6 * notaEx
//     }
//     if (notaFinal<5){
//         return notafinal,"D";
//     }
//     if (notaFinal>=5 & notaFinal<6,5) {
//         return notafinal,"C";

//     }
//     if (notaFinal>=6,5 & notaFinal<8) {
//         return notafinal,"B";

//     }
//     if (notaFinal>=8 & notaFinal<10) {
//         return notafinal,"A";

//     }
//     if (notaFinal=10) {
//         return notafinal,"H";

//     }  
// }

//3.5
// function paraulesCincChar (relat){
//     let paraules5Lletres=0;
//     let lletres=0;
//     let i=0;
//     while (relat[i] !=="."){
//         if(relat[i]===" "){
//             if (lletres===5){
//                 paraules5Lletres++;
//             }
//         }
//         lletres=0;
//     } elseif (relat[i] !== ","); {
//         lletres++;
//     }
//     i++
// }
// if (lletres ===5){
//     paraules5Letres++;
// }
// return paraules5Lletres;

//3.7

// function  comptadorLletres(frase){
//     let taula=[0,0,0,0,0,0,0];
//     let lletres=0;
//     let i=0;
//     while (frase[i]!=="."){
//         if(frase[i]===" "){
//             if(lletres>0 && lletres >=7){
//                 taula[lletres -1]++;
//             }
//             lletres=0;

//         }else if (relat [i]!==","){
//             lletres++;
//         }
//         i++;
//     }
//     if (lletres>0 && lletres <= 7){
//         taula[lletres-1]++;
//     }
//     return taula;
// }

// FUNCIONS 2
//19.1
// let nombre= parseInt(prompt("Introdueix un nombre:"));
// resultat=0;

// function resultatElevat(nombre){
//     resultat=resultat*2
//     return resultat
// }

// function elevaQuadrat(input) {
//     let sortida;
//     sortida=Math.pow(input,2);
//     return sortida;
//   }

// 19.4
// let milles= parseFloat(prompt("Milles="));
// function conversioMetres(){
//     metres= milles*1852
//     return metres
// }

//19.5
// let nombre=0;
// let nom=nombreEscrit(nombre);//crida a la funció
// console.log(nom);

// function nombreEscrit(nombre){
//     let text;
//     switch (nombre){
//         case 1:
//             text="U";
//             break;
//         case 2:
//             text="Dos";
//             break;
//     }
// }

//19.6
// let segons=0;
// let temps= canviTemps(segons);
// console.log(temps);

// function canviTemps(segons){
//     let temps;
//     let min= Math.floor (segons/60);
//     segons = segons %60;
//     let hores= Math.floor(min/60);
//     min= min%60;
//     temps=hores + " h. " + min + " min.  "+ segons + " seg."
//     return text;
// }

//19.7
// let salariFunció= salariTotal(horesTreballades,salariBrut);
// console.log(salariFunció);

// function salariTotal(horesTreballades,salariBrut){
//     let horesTreballades= 0;
//     let salariBrut;
//     if (horesTreballades<40){
//         salariBrut=salariBrut;
//     }else if (horesTreballades>=40){
//         salariBrut=salariBrut+salaribrut*(horesTreballades-40)
//     }
// }

//19.8
// let any;

// function anyTraspas(any){
//     anyTraspass=false;
//     if (any%4===0){
//         anyTraspass=true;
//     }else if (any % 100 === 0 && any % 400 !== 0){
//         anyTraspass=false;
//     }
// // }

// //19.11
// let cadenaChar= "";
// function cadenaCodificada(cadenaChar){
//     let arrAux =[];
//     let j= arrAux.lenght-1;
    
//     for(i=0;i<arrAux.lenght;i++){
//         if (cadenaChar[i]=="a"){
//             arrAux[j]=1;
//         }else if (cadenaChar[i]=="e"){
//             arrAux[j]=2;
//         }else if (cadenaChar[i]=="i"){
//             arrAux[j]=3;
//         }else if (cadenaChar[i]=="o"){
//             arrAux[j]=4;
//         }else if (cadenaChar[i]=="u"){
//             arrAux[j]=5;
//         }else {
//             arrAux[j]=cadenaChar[i];
//         }
//         j=j-1;  
//     }
//     return arrAux;
// }

//19.17
// let frase="";

// function quantesParaules(frase){
//     paraules=0;
//     i=0;
//     for(i=0; i= frase[i];i++){
//         if (frase[i]===" "){
//             paraules++;
//         }
//         i++
//     }
//     paraules++
//     return paraules
// }

//19.18
// let frase="";
// function ParaulesAmbÇ(frase){
//     let Ç=0;
//     let i=0;
//     let paraules=0;

//     for(i=0;i>=frase.lenght;i++){
//         if(frase[i]!=="·" && frase[i]!==" "){
//             if (frase[i]==="ç"){
//                 Ç++;
//             }
//         }else{
//             paraules++;
//         }

//     }
// }

// //19.20
// function comptaParaulesCincLletres(arr){
//     let i;
//     let contParaules=0;
// 	let contParaules5=0;
// 	let cont=0;
//     let text;
//     for (i=0;i<arr.length;i++){
// 		if (arr[i]!=" " && arr[i]!="."){
// 			cont++
// 		}else{
// 			if (cont==5){
// 				contParaules5++
// 			}
// 			contParaules++;
// 			cont=0;
// 		}
//     }
