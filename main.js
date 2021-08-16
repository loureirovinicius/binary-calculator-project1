function showNumber() {
    var userInput = document.getElementById('number-area').value
    var alert = document.getElementById('alert')
    var result = document.getElementById('result')
    if (userInput.length > 10) {
        alert.innerText = "You cannot enter more than 8 digits. Please try again."
    } else if (userInput.length == 0) {
        alert.innerText = "Insert a number to start."
    } else if (/[^01]/.test(userInput)) {
        alert.innerText = "You cannot enter a number that is not 0 or 1."
    } else {
        result.innerText = parseInt(userInput, 2)
    }
}