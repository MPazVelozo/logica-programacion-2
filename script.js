function convertirTemperatura() {
    let tempCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

    // Verificar si la entrada es un número
    if (isNaN(tempCelsius)) {
        document.getElementById('resultadoF').innerText = "Error: Por favor, ingresa un valor numérico.";
        document.getElementById('resultadoK').innerText = "";
        return;
    }

    // Convertir a grados Fahrenheit
    let tempFahrenheit = (tempCelsius * 9/5) + 32;

    // Convertir a grados Kelvin
    let tempKelvin = tempCelsius + 273.15;

    // Mostrar los resultados en el DOM
    document.getElementById('resultadoF').innerText = `Grados Fahrenheit: ${tempFahrenheit.toFixed(2)}`;
    document.getElementById('resultadoK').innerText = `Grados Kelvin: ${tempKelvin.toFixed(2)}`;

    // Mostrar los resultados en la consola
    console.log(`Grados Fahrenheit: ${tempFahrenheit.toFixed(2)}`);
    console.log(`Grados Kelvin: ${tempKelvin.toFixed(2)}`);
}