let conus_tarrina = prompt("Conus(c) o Tarrina (t)").toLowerCase();
let sabors = prompt("vainilla,xocolata, turró, menta, oreo, crema, gerds, ametlles").toLowerCase();
let preu_tipus = 0;
let preu_final = 0;
let error = false;

if (conus_tarrina === "c") {
    preu_tipus = 3.45;
} else if (conus_tarrina === "t") {
    preu_tipus = 3.95;
} else {
    error = true;
    console.log("Error, has introduït una opció incorrecta per a conus o tarrina.");
}

if (!error) {
    switch (sabors) {
        case "vainilla":
        case "xocolata":
            preu_final = preu_tipus;
            break;
        case "turró":
        case "menta":
        case "oreo":
            preu_final = preu_tipus + 0.5;
            break;
        case "crema":
        case "gerds":
        case "ametlles":
            preu_final = preu_tipus + 1;
            break;
        default:
            console.log("Error, dades mal introduïdes.");
            error = true;
    }
}

if (!error) {
    console.log("Preu: " + preu_final + "€");
}

    