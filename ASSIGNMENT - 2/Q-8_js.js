function generateMultiplicationTable() {
    // Get the number from the input field
    const number = document.getElementById("numberInput").value;
    const tableOutput = document.getElementById("tableOutput");

    // Clear previous output
    tableOutput.innerHTML = '';

    // Check if the input is a valid number
    if (number) {
        // Generate multiplication table
        for (let i = 1; i <= 10; i++) {
            const result = number * i;
            tableOutput.innerHTML += `${number} x ${i} = ${result}<br>`;
        }
    } else {
        tableOutput.innerHTML = "Please enter a valid number.";
    }
}
