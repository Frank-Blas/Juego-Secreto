//Declaramos las variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Declaramos las funciones

//Funcion para asignar texto a cualquier elemento
function asignarTextoElemento(elemento, texto)
{
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

//Funcion para verificar intento
function verificarIntento()
{
    //se genera el numero suedoaleatorio
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);


    //se valida que el numero generado sea igual al del usuario
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos == 1)? "vez" : "veces"}`);

        //remover el desable del boton nuevo juego cuando el usuario acerte el numero
        document.getElementById("reiniciar").removeAttribute("disabled")

    }else {
        //mensaje de ayuda cuando no se acierta el numero
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El numero secreto es menor");
        }else{
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos ++;
        limpiarCaja();
    }

    return;
}

//funcion limpiar caja
function limpiarCaja() {
    document.querySelector("#valorUsuario"). value = "";
}

//Funcion para generar el numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado esta incluido en la lista

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles")
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//funciones mensajes iniciales
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del Numero Secreto!");
    asignarTextoElemento(`p","Indica un Numero entre el 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//funcion reiniciar Juego
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //mostrar condiciones iniciales
    condicionesIniciales();
    //deshabilitar el boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

//Se le hace el llamado a las funciones
condicionesIniciales();