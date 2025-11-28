
function login() {
    let email = document.querySelector(".e-mail").value;
    let pass = document.querySelector(".text").value;

    let users = JSON.parse(localStorage.getItem("userDetail")) || [];

    let user = users.find(u => u.email === email && u.password === pass);

    localStorage.setItem("userDetail", JSON.stringify(users));

             alert("Login Successful!");
             document.querySelector("form").reset();
             window.location.href = "../login/main.html"
}  
function logout(){
             window.location.href = "../login/login.html"
}