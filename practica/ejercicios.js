//1 crea una funcion que calcule el indice de masa corporal(IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibiran como parametros
function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

//2 crea una funcion que calcule el valor del factorial de un numero pasado como parametros
function calcularFactorial(numero) {
    if (numero === o || numero === 1) {
        return 1;
    }else {
        return numero * calcularFactorial(numero - 1);
    }
}

//uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

//3 crea una funcion que convierta en dolares, pasadi como parametro, y devuelva el valor equivalente en reales. Para esto, cosidere la cotizacion del dolar igual a R$4.80.
function convertirDolaresAReales(dolares) {
    let cotizacionDolar = 4.80;
    let reales = dolares * cotizacionDolar;
    return reales;
}

//uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dolares es R$ ${valorEnReales}`);

//4 crea una funcion que muestre en pantalla el area y el perimetro de una sala rectangular, utilizando la altura y la anchura que se proporcionaran como parametros
