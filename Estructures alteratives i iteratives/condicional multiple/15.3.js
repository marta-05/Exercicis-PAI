let dia_lletra= prompt("l-dilluns, m - dimarts, x - dimecres, j - dijous,v-divendres, s- dissabte, g-diumenge");
let dia;


switch (dia_lletra){
    case 'l':
        dia= "Dilluns"
        break;
    case 'm':
        dia= "Dimarts"
        break;
    case 'x':
        dia= "Dimecres"
        break;
    case 'j':
        dia="Dijous"
        break;
    case 'v':
        dia="Divendres"
        break;
    case 's':
        dia="Dissabte"
        break;
    case 'g':
        dia="Diumenge"
        break;
    default:
        document.write("ERROR")
}
document.write(dia)