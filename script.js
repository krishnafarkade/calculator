function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression
        display.value = eval(display.value);
    } catch (error) {
        // Display error if there's an issue with the expression
        display.value = 'Error';
    }
}
