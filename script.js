function convertirTemperatura() {
    let tempCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

    if (isNaN(tempCelsius)) {
        document.getElementById('resultadoF').innerText = "Error: Por favor, ingresa un valor numérico.";
        document.getElementById('resultadoK').innerText = "";
        return;
    }

    let tempFahrenheit = (tempCelsius * 9/5) + 32;

    let tempKelvin = tempCelsius + 273.15;

    document.getElementById('resultadoF').innerText = `Grados Fahrenheit: ${tempFahrenheit.toFixed(2)}`;
    document.getElementById('resultadoK').innerText = `Grados Kelvin: ${tempKelvin.toFixed(2)}`;

}
