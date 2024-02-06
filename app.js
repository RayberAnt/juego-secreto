

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(`Numero Secreto: ${numeroSecreto}`);
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "el numero secreto es menor");
        } else {
            asignarTextoElemento("p", "el numero secreto es mayor");
        } 
        intentos = intentos + 1;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.getElementById("valorUsuario").value = "";
}


function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numero posibles");
        document.getElementById("intentar").setAttribute("disabled", true);
    } else {
        //Si el numero generado esta incluido en la lista.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    limpiarCaja();
    
}

function reiniciarJuego() {
    //limpia caja
    //Indica mensaje de intervalo de numeros
    //Genera el numero aleatorio
    //Inicializar el numero intentos
   condicionesIniciales();
   //Deshabilitar el boton de nuevo juego
   document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
