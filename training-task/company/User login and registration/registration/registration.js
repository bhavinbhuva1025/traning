document.addEventListener("DOMContentLoaded", () => {
    let loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedUser) {
        window.location.href = "../login/main.html";
    }
});


function register(event) {
    event.preventDefault();

    let uName = document.querySelector(".name").value;
    let eMail = document.querySelector(".email").value;
    let pass = document.querySelector(".pass").value;
    let rePass = document.querySelector(".re-pass").value;

    let errName = document.querySelector("#err-name");
    let errEmail = document.querySelector("#err-email");
    let errPass = document.querySelector("#err-pass");
    let errRepass = document.querySelector("#err-repass");

    let valid = true;

    // Name validation
    if (uName === "") {
        errName.innerHTML = "User Name is Required";
        errName.style.display = "block";
        valid = false;
    } else {
        errName.style.display = "none";
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (eMail === "") {
        errEmail.innerHTML = "User E-mail is Required";
        errEmail.style.display = "block";
        valid = false;
    } else if (!emailPattern.test(eMail)) {
        errEmail.innerHTML = "Invalid Email Format";
        errEmail.style.display = "block";
        valid = false;
    } else {
        errEmail.style.display = "none";
    }

    // Password validation
    if (pass === "") {
        errPass.innerHTML = "User Password is Required";
        errPass.style.display = "block";
        valid = false;
    } else {
        errPass.style.display = "none";
    }

    // Confirm password validation
    if (rePass === "") {
        errRepass.innerHTML = "Confirm Password is required";
        errRepass.style.display = "block";
        valid = false;
    } else if (pass !== rePass) {
        errRepass.innerHTML = "Passwords do not match!";
        errRepass.style.display = "block";
        valid = false;
    } else {
        errRepass.style.display = "none";
    }

    if (!valid) return;

    // Get existing users
    let users = JSON.parse(localStorage.getItem("userDetail")) || [];

    // Check if email already exists
    if (users.some(user => user.email === eMail)) {
        errEmail.innerHTML = "Email already exists!";
        errEmail.style.display = "block";
        return;
    }

    // Create new user object
    let newUser = {
        id: Date.now(),
        name: uName,
        email: eMail,
        password: rePass,
        role: "user",
        timestamp: Date.now().toString()
    };

    // Save new user
    users.push(newUser);
    localStorage.setItem("userDetail", JSON.stringify(users));

    alert("Registration Successful! Please log in.");
    document.querySelector("form").reset();

    // ❗ Redirect to LOGIN PAGE (not dashboard)
    window.location.href = "../login/login.html";
}
