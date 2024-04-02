
function processEntry() {
    var amount = parseInt(document.getElementById("amount").value);
    if (!isNaN(amount) && amount >= 0 && amount <= 99) {
        makeChange(amount);
    } else {
        alert("Please enter a valid number between 0 and 99.");
    }
}

function makeChange(amount) {
    var quarters = Math.floor(amount / 25);
    var remainingAmount = amount % 25;
    var dimes = Math.floor(remainingAmount / 10);
    remainingAmount %= 10;
    var nickels = Math.floor(remainingAmount / 5);
    var pennies = remainingAmount % 5;

    document.getElementById("quarters").value = quarters;
    document.getElementById("dimes").value = dimes;
    document.getElementById("nickels").value = nickels;
    document.getElementById("pennies").value = pennies;
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculate").addEventListener("click", function () {
        processEntry();
    });
});
