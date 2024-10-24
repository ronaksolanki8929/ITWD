// Function to perform arithmetic operations
function performArithmeticOperations() {
    // Define two numbers
    let num1 = 10;
    let num2 = 5;

    // Perform arithmetic operations
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;

    // Display results
    document.getElementById("addition").innerText = `Addition: ${num1} + ${num2} = ${addition}`;
    document.getElementById("subtraction").innerText = `Subtraction: ${num1} - ${num2} = ${subtraction}`;
    document.getElementById("multiplication").innerText = `Multiplication: ${num1} * ${num2} = ${multiplication}`;
    document.getElementById("division").innerText = `Division: ${num1} / ${num2} = ${division}`;
}

// Call the function when the page loads
window.onload = performArithmeticOperations;
