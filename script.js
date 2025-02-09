// Variables globales
let selectedInitialScale = "celsius";
let selectedDestinationScale = "fahrenheit";
let currentLanguage = "es"; // Idioma predeterminado

// Textos en diferentes idiomas
const translations = {
    es: {
        converterTitle: "Conversor de Temperatura Universal",
        temperatureLabel: "Temperatura:",
        initialScaleLabel: "Selecciona la escala inicial:",
        destinationScaleLabel: "Selecciona la escala de destino:",
        formulasTitle: "Fórmulas de Conversión",
        fromToHeader: "Desde\\Hacia",
        aboutTitle: "Acerca de",
        aboutText: "Esta herramienta fue diseñada para facilitar la conversión entre diferentes escalas de temperatura. Utiliza fórmulas precisas y está optimizada para brindar una experiencia profesional."
    },
    en: {
        converterTitle: "Universal Temperature Converter",
        temperatureLabel: "Temperature:",
        initialScaleLabel: "Select the initial scale:",
        destinationScaleLabel: "Select the destination scale:",
        formulasTitle: "Conversion Formulas",
        fromToHeader: "From\\To",
        aboutTitle: "About",
        aboutText: "This tool was designed to facilitate conversion between different temperature scales. It uses precise formulas and is optimized to provide a professional experience."
    }
};

// Cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    updateUI();
}

// Actualizar la interfaz según el idioma seleccionado
function updateUI() {
    const lang = translations[currentLanguage];
    document.getElementById("converter-title").textContent = lang.converterTitle;
    document.getElementById("temperature-label").textContent = lang.temperatureLabel;
    document.getElementById("initial-scale-label").textContent = lang.initialScaleLabel;
    document.getElementById("destination-scale-label").textContent = lang.destinationScaleLabel;
    document.getElementById("formulas-title").textContent = lang.formulasTitle;
    document.getElementById("from-to-header").textContent = lang.fromToHeader;
    document.getElementById("about-title").textContent = lang.aboutTitle;
    document.getElementById("about-text").textContent = lang.aboutText;
}

// Array de datos curiosos sobre temperatura
const datosCuriosos = [
    "El sistema Celsius fue creado por Anders Celsius en 1742.",
    "La temperatura promedio en la superficie del Sol es de aproximadamente 5,500°C.",
    "El cero absoluto (-273.15°C) es la temperatura más baja posible.",
    "La temperatura más fría registrada en la Tierra fue de -89.2°C en la Antártida.",
    "El sistema Fahrenheit fue inventado por Daniel Gabriel Fahrenheit en 1724."
];

// Función para obtener un dato curioso aleatorio
function obtenerDatoCurioso() {
    const indiceAleatorio = Math.floor(Math.random() * datosCuriosos.length);
    return datosCuriosos[indiceAleatorio];
}

// Mostrar un dato curioso inicialmente
document.getElementById("curiosidad").textContent = `💡 ${obtenerDatoCurioso()}`;

// Cambiar datos curiosos automáticamente cada 10 segundos
setInterval(() => {
    document.getElementById("curiosidad").textContent = `💡 ${obtenerDatoCurioso()}`;
}, 10000);

// Manejar selección de botones
document.querySelectorAll("#initial-scale-buttons button").forEach(button => {
    button.addEventListener("click", () => {
        selectedInitialScale = button.dataset.scale;
        highlightSelectedButton("#initial-scale-buttons", button);
    });
});

document.querySelectorAll("#destination-scale-buttons button").forEach(button => {
    button.addEventListener("click", () => {
        selectedDestinationScale = button.dataset.scale;
        highlightSelectedButton("#destination-scale-buttons", button);
    });
});

// Resaltar el botón seleccionado
function highlightSelectedButton(containerSelector, selectedButton) {
    document.querySelectorAll(`${containerSelector} button`).forEach(button => {
        button.style.backgroundColor = "";
    });
    selectedButton.style.backgroundColor = "#2980b9";
}

// Función principal de conversión
function convertirTemperatura() {
    const input = document.getElementById("inputTemp");
    const resultado = document.getElementById("resultado");

    if (!input.value) {
        resultado.innerHTML = '<div style="color: #e74c3c;">⚠️ Ingresa un valor</div>';
        return;
    }

    const temperatura = parseFloat(input.value);
    let valorConvertido;

    // Conversión a Celsius primero
    let celsius;
    switch (selectedInitialScale) {
        case "celsius": celsius = temperatura; break;
        case "fahrenheit": celsius = (temperatura - 32) * 5 / 9; break;
        case "rankine": celsius = (temperatura - 491.67) * 5 / 9; break;
        case "kelvin": celsius = temperatura - 273.15; break;
    }

    // Conversión a escala destino
    switch (selectedDestinationScale) {
        case "celsius": valorConvertido = celsius; break;
        case "fahrenheit": valorConvertido = (celsius * 9 / 5) + 32; break;
        case "rankine": valorConvertido = (celsius + 273.15) * 9 / 5; break;
        case "kelvin": valorConvertido = celsius + 273.15; break;
    }

    // Formatear resultado
    const simbolos = {
        celsius: "°C",
        fahrenheit: "°F",
        rankine: "°R",
        kelvin: "K"
    };
    resultado.innerHTML = `
        <div style="color: #27ae60; font-weight: bold;">
            ${temperatura} ${simbolos[selectedInitialScale]} = 
            ${valorConvertido.toFixed(2)} ${simbolos[selectedDestinationScale]}
        </div>
    `;
}

// Inicializar la interfaz al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    updateUI();
});
