// document.addEventListener("DOMContentLoaded", function () {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

//     // Move focus to the "Arrival Date" text box
//     const arrivalDateTextBox = document.getElementById('arrivalDate');
//     if (arrivalDateTextBox) {
//         arrivalDateTextBox.focus();
//     } else {
//         console.error("Arrival date text box not found!");
//     }

//     // Event handler for form submission
//     document.getElementById("reservationForm").addEventListener("submit", function (event) {
//         // Prevent form submission
//         event.preventDefault();

//         // Validate form entries
//         var arrivalDate = document.getElementById("arrivalDate").value.trim();
//         var numNights = document.getElementById("numNights").value.trim();
//         var email = document.getElementById("email").value.trim();
//         var phone = document.getElementById("phone").value.trim();

//         // Check if any fields are empty
//         if (arrivalDate === "" || numNights === "" || email === "" || phone === "") {
//             alert("Please fill in all fields.");
//             return;
//         }

//         // Check if numNights is numeric
//         if (isNaN(numNights)) {
//             alert("Number of nights must be numeric.");
//             return;
//         }

        

//         // Check if email matches the pattern
//         if (!emailPattern.test(email)) {
//             alert("Please enter a valid email address.");
//             return;
//         }

//         // If all validations pass, submit the form
//         this.submit();
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    const phonePattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; // Regular expression for Canadian-style phone number validation

    // Move focus to the "Arrival Date" text box
    const arrivalDateTextBox = document.getElementById('arrivalDate');
    if (arrivalDateTextBox) {
        arrivalDateTextBox.focus();
    } else {
        console.error("Arrival date text box not found!");
    }

    // Event handler for form submission
    document.getElementById("reservationForm").addEventListener("submit", function (event) {
        // Prevent form submission
        event.preventDefault();

        // Validate form entries
        if (!validateForm()) {
            return;
        }

        // If all validations pass, redirect to the next page with form details
        redirectToNextPage();
    });

    function validateForm() {
        var arrivalDate = document.getElementById("arrivalDate").value.trim();
        var numNights = document.getElementById("numNights").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();

        // Check if any fields are empty
        if (arrivalDate === "" || numNights === "" || email === "" || phone === "") {
            alert("Please fill in all fields.");
            return false;
        }

        // Check if numNights is numeric
        if (isNaN(numNights)) {
            alert("Number of nights must be numeric.");
            return false;
        }

        // Check if email matches the pattern
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Validate date format
        if (!isValidDateFormat(arrivalDate)) {
            alert("Please enter a valid date in the format YYYY-MM-DD.");
            return false;
        }

        // Check if phone number matches the pattern
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid Canadian-style phone number.");
            return false;
        }

        return true;
    }

    // Function to validate date format (YYYY-MM-DD)
    function isValidDateFormat(dateString) {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(dateString);
    }

    // Function to redirect to the next page with form details
    function redirectToNextPage() {
        var arrivalDate = document.getElementById("arrivalDate").value.trim();
        var numNights = document.getElementById("numNights").value.trim();
        var adults = document.getElementById("adults").value.trim();
        var children = document.getElementById("children").value.trim();
        var roomType = document.querySelector('input[name="room"]:checked').value.trim();
        var bedType = document.querySelector('input[name="bed"]:checked').value.trim();
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
    
        // Construct the query string
        var queryString = "?arrivalDate=" + encodeURIComponent(arrivalDate) +
                          "&numNights=" + encodeURIComponent(numNights) +
                          "&adults=" + encodeURIComponent(adults) +
                          "&children=" + encodeURIComponent(children) +
                          "&roomType=" + encodeURIComponent(roomType) +
                          "&bedType=" + encodeURIComponent(bedType) +
                          "&name=" + encodeURIComponent(name) +
                          "&email=" + encodeURIComponent(email) +
                          "&phone=" + encodeURIComponent(phone);
    
        // Redirect to the next page with the query string
        window.location.href = "../index.html" + queryString;
    }
    
});
