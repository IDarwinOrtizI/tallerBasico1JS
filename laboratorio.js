const prompt = require("prompt-sync")();

//  Ejercicio 1: Calculadora de Propinas
let total = +prompt("Digite el monto a pagar sin propina: ");
let porcentaje = +prompt("Digite el porcentaje de propina: ");
function calcularPropina(total, porcentaje){
    propina = total * (porcentaje / 100);
    return propina;
};
console.log("El monto final a pagar es: ", total + calcularPropina(total, porcentaje));

//  Ejercicio 2: Validar Contraseña
let contraseña = prompt("Digite una contraseña: ");
function validarContraseña(contraseña) {
    if (contraseña.length < 8) {
        return false;
    } 
    let tieneNumero = false;
    let tieneMayuscula = false;
    const numeros = "0123456789";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < contraseña.length; i++) {
        const caracter = contraseña[i];
        if (numeros.includes(caracter)) {
            tieneNumero = true;
        }
        if (mayusculas.includes(caracter)) {
            tieneMayuscula = true;
        }
        if (tieneNumero && tieneMayuscula) {
            break;
        }
    }
    return tieneNumero && tieneMayuscula;
};
console.log(validarContraseña(contraseña));

//  Ejercicio 3: Buscar Producto en Inventario
const inventario = [
    { nombre: "Camisa", precio: 60.000, cantidad: 100},
    { nombre: "Zapatos", precio: 100.000, cantidad: 50},
    { nombre: "Pantalon", precio: 80.000, cantidad: 70}
]
let nombre = prompt("Digite el nombre del producto que desea: ")
function buscarProducto(nombre, inventario){
    let producto = inventario.find(inventario => inventario.nombre === nombre);
    return producto
}
console.log(buscarProducto(nombre, inventario))

//  Ejercicio 4: Calcular Promedio de Notas
// sufri
function calcularPromedio(notas) {
    const suma = notas.reduce((acum, nota) => acum + nota, 0);
    const promedio = suma / notas.length;
    return promedio.toFixed(2);
}
console.log(calcularPromedio([3.5, 4.0, 4.8, 5.0])); 

//  Ejercicio 5: Filtrar Usuarios por Edad
const usuarios = [
    { nombre: "Ana", edad: 26 },
    { nombre: "Nath", edad: 24 },
    { nombre: "Sebastian", edad: 22 }
];

function filtrarUsuarios(usuarios, edadMinima) {
    return usuarios.filter(usuario => usuario.edad >= edadMinima);
}
console.log(filtrarUsuarios(usuarios, 18));

//  Ejercicio 6: Contador de Palabras
// sufri
function contarPalabras(texto) {
    const palabras = texto.trim().split(/\s+/);
    return texto.trim() === "" ? 0 : palabras.length;
}
console.log(contarPalabras("Hola mundo desde JavaScript")); 

//  Ejercicio 7: Simulador de Cajero Automático
function retirarDinero(saldo, monto) {
    if (monto <= saldo) {
    const nuevoSaldo = saldo - monto;
    const text = "Retiro exitoso. Nuevo saldo: "; 
    return text + nuevoSaldo
    } else {
    return "Fondos insuficientes.";
    }
}
console.log(retirarDinero(50000, 20000)); 

//  Ejercicio 8: Cambio de Moneda
function convertirMoneda(monto, monedaDestino) {
  const tasaUSD = 0.00024; // 1 COP = 0.00024 USD (ejemplo)
  const tasaEUR = 0.00022; // 1 COP = 0.00022 EUR

    if (monedaDestino.toLowerCase() === "usd") {
    return (monto * tasaUSD).toFixed(2) + " USD";
    } else if (monedaDestino.toLowerCase() === "eur") {
    return (monto * tasaEUR).toFixed(2) + " EUR";
    } else {
    return "Moneda no válida. Use 'USD' o 'EUR'.";
    }
}
console.log(convertirMoneda(100000, "EUR")); 
