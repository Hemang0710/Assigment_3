
document.addEventListener("DOMContentLoaded", function() {
   
    const $ = (selector) => document.querySelector(selector);
    
    function processEntries() {
        const subtotal = parseFloat($("#subtotal").value);
        const trate = parseFloat($("#trate").value);

        if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
            alert("Subtotal must be > 0 and < 10000");
            return;
        }
        if (isNaN(trate) || trate <= 0 || trate >= 12) {
            alert("Tax Rate must be > 0 and < 12");
            return;
        }

        const stax = (subtotal * trate) / 100;
        const total = subtotal + stax;

        $("#stax").value = stax.toFixed(2);
        $("#total").value = total.toFixed(2);
    }

    $("#cbutton").addEventListener("click", processEntries);

    window.onload = function() {
        $("#subtotal").focus();
    };

    $("#cbutton").addEventListener("click", function() {
        $("#subtotal").focus();
    });

    $("#clear").addEventListener("click", function() {
        const inputs = document.querySelectorAll("input[type='text']");
        inputs.forEach(input => input.value = "");
        $("#subtotal").focus();
    });

    $("#subtotal").addEventListener("click", clearTextBox);
    $("#trate").addEventListener("click", clearTextBox);

    function clearTextBox(event) {
        event.target.value = "";
    }
});
