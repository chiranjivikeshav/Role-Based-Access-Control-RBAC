// Simple login validation for empty fields
document.getElementById("login-form").addEventListener("submit", function (event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        event.preventDefault(); // Prevent form submission if fields are empty
        alert("Both fields are required!");
    }
});
