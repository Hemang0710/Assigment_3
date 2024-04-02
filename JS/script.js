$(document).ready(function() {
    // 1. Create a $() function
    function $(selector) {
        return document.querySelector(selector);
    }

    // 2. Event handler function
    function processEntries() {
        var subtotal = parseFloat($('#subtotal').value);
        var taxRate = parseFloat($('#taxRate').value);
        
        // 4. Data validation
        if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
            alert('Subtotal must be > 0 and < 10000');
            return;
        }
        if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
            alert('Tax Rate must be > 0 and < 12');
            return;
        }

        var salesTax = subtotal * (taxRate / 100);
        var total = subtotal + salesTax;

        $('#salesTax').value = salesTax.toFixed(2);
        $('#total').value = total.toFixed(2);
    }

    // 3. DOMContentLoaded event handler
    document.addEventListener('DOMContentLoaded', function() {
        $('#calculate').addEventListener('click', processEntries);
        $('#clear').addEventListener('click', clearFields);

        // 5. Move cursor to Subtotal field
        $('#subtotal').focus();
    });

    // 6. Clear all text boxes and move cursor to Subtotal field
    function clearFields() {
        $('#subtotal').value = '';
        $('#taxRate').value = '';
        $('#salesTax').value = '';
        $('#total').value = '';
        $('#subtotal').focus();
    }

    // 7. Event handlers for Subtotal and Tax Rate text boxes
    $('#subtotal').addEventListener('click', clearTextBox);
    $('#taxRate').addEventListener('click', clearTextBox);

    function clearTextBox() {
        this.value = '';
    }
});
