//crea una funcion que muestre hola mundo en la consola
function saludo(){
    console.log("Hola, Mundo!!");
    return
}
saludo()

//crear una funcion que reciba un nombre como parametro y muestre hola, [nombre]! en la consola
function saludoParametro(nombre){
    console.log(`Hola, ${nombre}`);
    return;
}
saludoParametro("alice")

//crear una funcion que reciba un numero como parametro y devuelva el doble de ese numero
function calcularDoble(numero){
    return numero * 2;
}
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble)

//crear yuna funcion que reciba 3 numeros como parametros y devuleva su promedio
function calcularPromedio(a, b, c) {
    return(a+ b + c)/ 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio)
