function printEvenNumbers() {
    let evenNumbers = [];
    let number = 2; // Start with the first even number

    while (number <= 25) {
        evenNumbers.push(number);
        number += 2; // Increment by 2 to get the next even number
    }

    // Display the even numbers on the webpage
    document.getElementById("evenNumbers").innerText = evenNumbers.join(", ");
}
