function convertirTemperatura() {
    const input = document.getElementById('inputTemp');
    const fromScale = document.getElementById('fromScale').value;
    const toScale = document.getElementById('toScale').value;
    const resultado = document.getElementById('resultado');

    if (!input.value) {
        resultado.innerHTML = '<div style="color: #e74c3c;">⚠️ Ingresa un valor</div>';
        return;
    }

    const temperatura = parseFloat(input.value);
    let valorConvertido;

    // Conversión a Celsius primero
    let celsius;
    switch(fromScale) {
        case 'celsius': celsius = temperatura; break;
        case 'fahrenheit': celsius = (temperatura - 32) * 5/9; break;
        case 'rankine': celsius = (temperatura - 491.67) * 5/9; break;
        case 'kelvin': celsius = temperatura - 273.15; break;
    }

    // Conversión a escala destino
    switch(toScale) {
        case 'celsius': valorConvertido = celsius; break;
        case 'fahrenheit': valorConvertido = (celsius * 9/5) + 32; break;
        case 'rankine': valorConvertido = (celsius + 273.15) * 9/5; break;
        case 'kelvin': valorConvertido = celsius + 273.15; break;
    }

    // Formatear resultado
    const simbolos = {
        celsius: '°C',
        fahrenheit: '°F',
        rankine: '°R',
        kelvin: 'K'
    };

    resultado.innerHTML = `
        <div style="color: #27ae60; font-weight: bold;">
            ${temperatura} ${simbolos[fromScale]} = 
            ${valorConvertido.toFixed(2)} ${simbolos[toScale]}
        </div>
    `;
}