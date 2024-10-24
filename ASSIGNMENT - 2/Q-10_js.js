function showAlert() {
    alert("This is an alert box!");
}

function showPrompt() {
    const userInput = prompt("Please enter your name:");
    const output = document.getElementById("output");
    if (userInput !== null) {
        output.innerText = `Hello, ${userInput}!`;
    } else {
        output.innerText = "You canceled the prompt.";
    }
}

function showConfirm() {
    const confirmation = confirm("Do you want to proceed?");
    const output = document.getElementById("output");
    if (confirmation) {
        output.innerText = "You chose to proceed.";
    } else {
        output.innerText = "You chose to cancel.";
    }
}
