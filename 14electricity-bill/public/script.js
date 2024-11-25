// public/js/script.js

$(document).ready(function() {
    $("form").on("submit", function(event) {
        var units = $("#units").val();
        if (units <= 0) {
            alert("Please enter a valid number of units.");
            event.preventDefault();  // Prevent form submission
        }
    });
});
