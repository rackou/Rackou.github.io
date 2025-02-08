function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromScale = document.getElementById("fromScale").value;
    const toScale = document.getElementById("toScale").value;

    if (isNaN(inputTemp)) {
        alert("Por favor ingresa un valor numérico válido");
        return;
    }

    let celsius;
    switch(fromScale) {
        case 'celsius': celsius = inputTemp; break;
        case 'fahrenheit': celsius = (inputTemp - 32) * 5/9; break;
        case 'rankine': celsius = (inputTemp - 491.67) * 5/9; break;
        case 'kelvin': celsius = inputTemp - 273.15; break;
    }

    let result;
    switch(toScale) {
        case 'celsius': result = celsius; break;
        case 'fahrenheit': result = (celsius * 9/5) + 32; break;
        case 'rankine': result = (celsius + 273.15) * 9/5; break;
        case 'kelvin': result = celsius + 273.15; break;
    }

    const scales = {
        celsius: '°C',
        fahrenheit: '°F',
        rankine: '°R',
        kelvin: 'K'
    };

    document.getElementById("result").innerHTML = `
        <div style="color: #27ae60; font-size: 1.4rem;">
            ${inputTemp.toFixed(2)} ${scales[fromScale]} = 
            <strong>${result.toFixed(2)} ${scales[toScale]}</strong>
        </div>
    `;
}
