//13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
//el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més
//gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.

let num1 = parseInt(prompt("Num1:"));
let num2 = parseInt(prompt("Num2:"));

if (num1 < num2 ) {
    console.log(" El num més gran és", num2);
}

else {
    console.log(" El num més gran és", num1);
};

