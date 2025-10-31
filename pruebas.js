//  Ejercicio 8: Cambio de Moneda
function convertirMoneda(monto, monedaDestino) {
    const tasaUSD = 0.00024; 
    const tasaEUR = 0.00022; 

    if (monedaDestino.toLowerCase() === "usd") {
    return (monto * tasaUSD).toFixed(2) + " USD";
    } else if (monedaDestino.toLowerCase() === "eur") {
    return (monto * tasaEUR).toFixed(2) + " EUR";
    } else {
    return "Moneda no válida. Use 'USD' o 'EUR'.";
    }
}
console.log(convertirMoneda(100000, "EUR")); 