// 1. Acceso a un sistema

let usuario = prompt("Escriba el usuario administrador: ");
let contraseña = prompt("Escriba la contraseña de administrador: ");

if (usuario === "admin" && contraseña === "1234") {
    
    alert("Acceso permitido");
    console.log("Bienvenido usuario " + usuario + " ha ingresado");

} else {
    alert("Acceso denegado");
    console.log("Intento de acceso incorrecto");
}

//RTA: se usa el operador logico && (AND)

//2. Calcular precio de entradas al cine

let edad = parseInt(prompt("Escriba la edad de la persona: "));
let estudiante = prompt("La persona esta estudiando? (Si/No) ");

let precioBase = 0;
let precioFinal = 0;

if (edad < 12) {
    precioBase = 5000;
} else if (edad >= 12 && edad <= 18) {
    precioBase = 8000;
} else {
    precioBase = 10000; 
}

if (estudiante === "SI" || estudiante === "si") {
    let descuento = precioBase * 0.20;
    precioFinal = precioBase - descuento;
    
    alert("Aplica descuento, el valor de la entrada es de: $" + precioFinal);

} else { 
    precioFinal = precioBase;
    alert("El valor de tu entrada es: $" + precioFinal);
    console.log("Valor entrada" + precioFinal);

}


// 3. Clasificacion de numeros

let numero = parseInt(prompt("Digita un numero: "));

if (numero > 0 ) {
    alert ("El numero " + numero + " es un numero positivo");
    console.log("El numero " + numero + " es un numero positivo");

}else if ( numero < 0 ) {
        alert ("El numero " + numero + " es un numero negativo");
        console.log("El numero " + numero + " es un numero negativo");

}else {
    alert("El numero es igual a 0");
    console.log("El numero es igual a 0");

}

    if (numero % 2 === 0) {
    alert("Además, el número es par.");
    console.log("Además, el número es par.");

} else {
    alert("Además, el número es impar.");
    console.log("Además, el número es impar.");

}

//4.Menu de opciones

let opcion = parseInt(prompt("Menú del Cajero Automático:\n1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir\n\nElige una opción (1-4):"));

switch (opcion) {
    case 1:
        alert("Consultando tu saldo actual...");
        console.log("Consultando tu saldo actual...");
        break; 
        
    case 2:
        alert("Preparando para retirar dinero...");
        console.log("Preparando para retirar dinero...");
        break;
        
    case 3:
        alert("Preparando para depositar dinero...");
        console.log("Preparando para depositar dinero...");
        break;
        
    case 4:
        alert("Saliendo del sistema. ¡Gracias por usar nuestro cajero!");
        console.log("Saliendo del sistema. ¡Gracias por usar nuestro cajero!");
        break;
        
    default:
        alert("Opción inválida. Por favor, ingresa un número del 1 al 4.");
        break;
}

//5. Sistema de calificaciones con condiciones lógicas.
let notaFinal = parseFloat(prompt("Ingresa la nota final del estudiante (0-100):"));
let asistencia = parseFloat(prompt("Ingresa el porcentaje de asistencia (0-100):"));

if (notaFinal >= 60 && asistencia >= 80) {  
    alert("Fue aprobado el estudiante cumple con todos los requisitos");
    console.log("Fue aprobado el estudiante cumple con todos los requisitos");

} else {
    alert("Fue reprobado no alcanza la nota o la asistencia minima");
    console.log("Fue reprobado no alcanza la nota o la asistencia minima");
}