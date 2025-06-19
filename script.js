// Temperature Converter JavaScript

let text = document.getElementById("text");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let display = document.getElementById("display");
let answer;

function convert() {
    // Check if input is empty
    if (text.value === "") {
        display.textContent = "Please enter a temperature value";
        display.style.backgroundColor = "#ffebee";
        display.style.borderColor = "#f44336";
        display.style.color = "#c62828";
        return;
    }
    
    // Check if input is a valid number
    if (isNaN(text.value)) {
        display.textContent = "Please enter a valid number";
        display.style.backgroundColor = "#ffebee";
        display.style.borderColor = "#f44336";
        display.style.color = "#c62828";
        return;
    }
    
    // Perform conversion based on selected unit
    if (celsius.checked) {
        answer = (parseFloat(text.value) * 9/5) + 32;
        display.textContent = `${text.value}°C = ${answer.toFixed(2)}°F`;
    }
    else if (fahrenheit.checked) {
        answer = (parseFloat(text.value) - 32) * 5/9;
        display.textContent = `${text.value}°F = ${answer.toFixed(2)}°C`;
    }
    else {
        display.textContent = "Please select a unit (Celsius or Fahrenheit)";
        display.style.backgroundColor = "#ffebee";
        display.style.borderColor = "#f44336";
        display.style.color = "#c62828";
        return;
    }
    
    // Reset display styling for successful conversion
    display.style.backgroundColor = "#e8f5e8";
    display.style.borderColor = "#4CAF50";
    display.style.color = "#2e7d32";
}

// Add event listener for Enter key press
text.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        convert();
    }
});

// Clear display when input changes
text.addEventListener("input", function() {
    display.textContent = "";
    display.style.backgroundColor = "#e8f5e8";
    display.style.borderColor = "#4CAF50";
    display.style.color = "#2e7d32";
});