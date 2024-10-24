function findDivisibleByThree() {
    const output = document.getElementById("output");
    let number = 1; // Start from 1
    let divisibleNumbers = [];

    // Use a do...while loop to find numbers divisible by 3
    do {
        if (number % 3 === 0) {
            divisibleNumbers.push(number);
        }
        number++;
    } while (number <= 50);

    // Display the result
    output.innerHTML = `Numbers divisible by 3: ${divisibleNumbers.join(", ")}`;
}
