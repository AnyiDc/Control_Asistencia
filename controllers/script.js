const horaLLegada = 9;
const horaSalida = 11;
let puntosAsistenciaP = 0;
let puntosAsistenciaI = 0;
let impuntual = 0;
let puntual  = 0;

let hora;

function registroHora(hora) {
    if (hora >= horaLLegada && hora <= horaSalida) {
        console.log("Asistente llegó puntual");
        puntosAsistenciaP += Number(10);
        puntual++;
    }
    else if (hora >= horaSalida) {
        console.log("Asistente llegó tarde");
        puntosAsistenciaI += Number(5);
        impuntual++;

    }

}

function contadorAsistentes(){
    console.log("Asistentes puntuales " + puntual + "Puntos  de asistencia: " + puntosAsistenciaP);
    console.log ("Asistentes impuntuales " + impuntual + " puntos de asistencia "+ puntosAsistenciaI);
    console.log( "Total de asistentes "  + ( puntual + impuntual));


}

console.log ("Bienvenido al evento")
var opcion = true;
while(opcion ==true){
    console.log("Escoja una opcion  \n 1: Registrar usuario  \n 2: Salir");
    var seleccion = Number(prompt('Seleccione una opcion'))
    switch(seleccion){

        case 1:
            hora = Number(prompt("Hora de llegada del asistente "))
            registroHora(hora);
            break;
            
            
        case 2: console.log("Gracias por su registro")
        contadorAsistentes();
        opcion = false;
        break;


        default: console.log("Opcion no valida, intente nuevamente");
    }

}
