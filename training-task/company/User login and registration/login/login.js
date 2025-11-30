ocument.addEventListener("DOMContentLoaded", () => {
    let loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedUser) {
        // already logged in → not allowed to access login page
        window.location.href = "../login/main.html";
    }
});

function login(event) {
    event.preventDefault();

    let email = document.querySelector(".e-mail").value.trim();
    let pass = document.querySelector(".text").value.trim();

    let emailError = document.getElementById("email-error");
    let passError = document.getElementById("pass-error");

    emailError.textContent = "";
    passError.textContent = "";

    let users = JSON.parse(localStorage.getItem("userDetail")) || [];

    if (email === "") {
        emailError.textContent = "Email is required";
        return;
    }

    if (pass === "") {
        passError.textContent = "Password is required";
        return;
    }

    let user = users.find(u => u.email === email);

    if (!user) {
        emailError.textContent = "Email does not exist";
        return;
    }

    if (user.password !== pass) {
        passError.textContent = "Incorrect password";
        return;
    }

    // ⭐ Save login session
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Login Successful!");
    document.querySelector("form").reset();
    window.location.href = "../login/main.html"; // Dashboard
}
