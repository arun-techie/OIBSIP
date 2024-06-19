document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(tempInput) || tempInput.trim() === '') {
        resultDiv.textContent = 'Please enter a valid number';
        resultDiv.style.color = 'red';
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemp = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
        resultDiv.textContent = `${convertedTemp.toFixed(2)} °F`;
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
        resultDiv.textContent = `${convertedTemp.toFixed(2)} °C`;
    } else if (unit === 'kelvin') {
        const toCelsius = temperature - 273.15;
        const toFahrenheit = (temperature - 273.15) * 9/5 + 32;
        resultDiv.innerHTML = `
            ${toCelsius.toFixed(2)} °C <br>
            ${toFahrenheit.toFixed(2)} °F
        `;
    }
    resultDiv.style.color = '#333';
}
