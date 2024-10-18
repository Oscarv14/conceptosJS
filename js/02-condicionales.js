// condicionales

//condicional simple
/*
if(condicion logica){
    todas las lineas que quiero que sucedan si se cumple la condicion logica
}
*/

// solicitar al usuario ingresar un numero y verificar si es positivo

// const numeroSolicitado = parseInt(prompt("Ingrese un número entero"));

// if(numeroSolicitado > 0){
//     document.write(`<p>El número ingresado: ${numeroSolicitado} es positivo</p>`)
// }
// else{
//     document.write(`<p>El número ingresado: ${numeroSolicitado} no es positivo</p>`)
// }

// cree un programa que solicite al usuario su edad e indique si puede votar o no.

// desde 18 años hasta los 75 años es obligatorio 
// si la persona tiene 16 o 17 años es opcional, desde 76 años en adelante tambien es opcional
// menores de 16 años no puede votar

const edad = parseInt(prompt("Ingrese su edad"));

if(edad >= 18 && edad <= 75){
    document.write(`<p>Usted está obligado a votar</p>`)
}else if (edad == 17 || edad == 16 || edad >= 76){
    document.write(`<p>Es opcional votar</p>`)
}else{
    document.write(`<p>No puede votar</p>`)
}
