LABORATORIO
Temas:
Variables y tipos de datos.
Funciones.
Condicionales (if/else).
Bucles (for, while).
Arrays y métodos básicos.

Ejercicio 1: Calculadora de Propinas
- Una app para calcular propinas en restaurantes.
Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de
propina, y retorne el monto final a pagar (total + propina).

Ejercicio 2: Validar Contraseña
- Formulario de registro.
Crea una función validarContraseña(contraseña) que retorne true si:
- Tiene al menos 8 caracteres.
- Incluye un número.
- Incluye una mayúscula.

Ejercicio 3: Buscar Producto en Inventario
- Sistema de gestión de inventario.
Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El
inventario debería estar PREDEFINIDO
ejemplo:
const inventario = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Zapatos", precio: 50 }
];

Ejercicio 4: Calcular Promedio de Notas
- Plataforma educativa.
Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario
(separadas por comas) y retorne el promedio (redondeado a 2 decimales).

Ejercicio 5: Filtrar Usuarios por Edad
- Red social.
Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función
filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la
cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita
cumplen con tener más de 18.

Ejercicio 6: Contador de Palabras
-Editor de texto.
Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por
espacios).

Ejercicio 7: Simulador de Cajero Automático
-App bancaria.
Crea una función retirarDinero(saldo, monto) que:
Pide al usuario su saldo actual y el monto a retirar.
Muestra el nuevo saldo o "Fondos insuficientes".

Ejercicio 8: Cambio de Moneda
-App de viajes.
Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
pedir al usuario monto en COP y la moneda con la que desea hacer la converción.