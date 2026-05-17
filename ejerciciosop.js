// 1. Acceso a un sistema

let usuario = prompt("Escriba el usuario administrador: ");
let contraseña = prompt("Escriba la contraseña de administrador: ");

if (usuario === "admin" && contraseña === "1234") {
    
    alert("Acceso permitido. Bienvenido al sistema.");
    console.log("Bienvenido usuario " + usuario + " ha ingresado.");

} else {
    alert("Acceso denegado.");
    console.log("Intento de acceso incorrecto");
}