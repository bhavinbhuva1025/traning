function register(event){
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

    if (uName === "") {
      errName.innerHTML="User Name is Required";
        errName.style.display = "block";
        valid = false;
    } else {
        errName.style.display = "none";
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (eMail === "") {
        errEmail.innerHTML = "User E-mail is Required";
        errEmail.style.display = "block";
        valid = false;
    }
    else if (!emailPattern.test(eMail)) {
        errEmail.innerHTML = "Invalid Email Format";
        errEmail.style.display = "block";
        valid = false;
    }
    else {
        errEmail.style.display = "none";
    }

    if (pass === "") {
      errPass.innerHTML="User Password is Required";
        errPass.style.display = "block";
        valid = false;
    } else {
        errPass.style.display = "none";
    }

    if (rePass === "") {
        errRepass.innerHTML = "Confirm Password is required";
        errRepass.style.display = "block";
        valid = false;
    }
    else if (pass !== rePass) {
        errRepass.innerHTML = "Passwords do not match!";
        errRepass.style.display = "block";
        valid = false;
    }
    else {
        errRepass.style.display = "none";
    }

    if (!valid) return;

    let users = JSON.parse(localStorage.getItem("userDetail")) || [];

    if (users.some(user => user.email === eMail)) {
        errEmail.innerHTML = "Email already exists!";
        errEmail.style.display = "block";
        return;
    }
        let newUser={
            id : Date.now(),
            name : uName,
            email: eMail,
            password: rePass,
            role: "user",
            timestamp: Date.now().toString()

        }
            users.push(newUser)
        localStorage.setItem("userDetail", JSON.stringify(users));

         alert("Registration Successful!");
         document.querySelector("form").reset();
         window.location.href = "../login/login.html"

}



