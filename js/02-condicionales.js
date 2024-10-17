// condicionales

//condicional simple
/*
if(condicion logica){
    todas las lineas que quiero que sucedan si se cumple la condicion logica
}
*/

// solicitar al usuario ingresar un numero y verificar si es positivo

const numeroSolicitado = parseInt(prompt("Ingrese un número entero"));

if(numeroSolicitado > 0){
    document.write(`<p>El número ingresado: ${numeroSolicitado} es positivo</p>`)
}
