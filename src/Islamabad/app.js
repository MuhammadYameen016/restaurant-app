
function openModal(modal) {
    document.getElementById(modal).style.display = "block";
}
window.onclick = function(event) {
    let loginModal = document.getElementById("loginModal");
    let signupModal = document.getElementById("signupModal");
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
}// LOGIN FUNCTIONALITY
document.querySelector("#loginModal .modal-btn").addEventListener("click", function () {
    let userEmail = document.querySelector("#loginModal input[type='text']").value;

    if (userEmail.trim() !== "") {
        Swal.fire({
            title: "Login Successful!",
            text: "Welcome back, " + userEmail + "!",
            icon: "success",
            confirmButtonText: "OK"
        });

        // Hide login & signup buttons
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("signupBtn").style.display = "none";

        // Show user icon and name
        document.getElementById("userName").textContent = userEmail;
        document.getElementById("userGreeting").style.display = "inline";
        document.getElementById("logoutBtn").style.display = "inline";

        // Close login modal
        document.getElementById("loginModal").style.display = "none";
    } else {
        Swal.fire({
            title: "Error",
            text: "Please enter a valid email!",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
});

// SIGN UP FUNCTIONALITY
document.querySelector("#signupModal .modal-btn").addEventListener("click", function () {
    let userEmail = document.querySelector("#signupModal input[type='text']").value;

    if (userEmail.trim() !== "") {
        Swal.fire({
            title: "Sign Up Successful!",
            text: "Welcome, " + userEmail + "!",
            icon: "success",
            confirmButtonText: "OK"
        });

        // Hide login & signup buttons
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("signupBtn").style.display = "none";

        // Show user icon and name
        document.getElementById("userName").textContent = userEmail;
        document.getElementById("userGreeting").style.display = "inline";
        document.getElementById("logoutBtn").style.display = "inline";

        // Close signup modal
        document.getElementById("signupModal").style.display = "none";
    } else {
        Swal.fire({
            title: "Error",
            text: "Please enter a valid email!",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
});

// LOGOUT FUNCTIONALITY
document.getElementById("logoutBtn").addEventListener("click", function () {
    Swal.fire({
        title: "Logged Out",
        text: "You have been successfully logged out.",
        icon: "info",
        confirmButtonText: "OK"
    });

    // Show login & signup buttons
    document.getElementById("loginBtn").style.display = "inline";
    document.getElementById("signupBtn").style.display = "inline";

    // Hide user greeting and logout button
    document.getElementById("userGreeting").style.display = "none";
    document.getElementById("logoutBtn").style.display = "none";
});
