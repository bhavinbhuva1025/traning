let form = document.querySelector("#form-group")

form.addEventListener("submit",(e) =>{
        e.preventDefault();

const name = document.querySelector("#name")
let email = document.querySelector("#email")
let pass = document.querySelector("#pass")
let repass = document.querySelector("#re-pass")
let check = document.querySelector(".ck")
let btn = document.querySelector("#btn")


let errname = document.querySelector("#err-name")   
let erremail=document.getElementById("err-email")
let errpass=document.getElementById("err-pass")
let errrepass=document.getElementById("err-repass")
let errcheck=document.getElementById("err-check")


  
var em_error=  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if(name.value.trim() === "" || name.value == "null")
    {
        errname.style.display="block"
    }
    else
    {
        errname.style.display="none"

    }
    if(email.value == "")
    {
        erremail.style.display="block"
    }
    else if(email.value == email.value.match(em_error))
    {
        erremail.style.display="none"
    }
    else
    {
        erremail.style.display="none"

    }
     if(pass.value.trim() === "" || pass.value == null)
     {
        errpass.style.display="block"    
     }
    else
    {
      errpass.style.display="none"
        
    }
    if( repass.value.trim() === "")
     {
        errrepass.style.display="block"    
     }
     else if(pass.value !== repass.value){
        errrepass.innerHTML="User confrim Password is not Match in User Password Please Enter Correct Password "
     }
    else
    {
      errrepass.style.display="none"
        
    }
    
     if(check.checked)
     {
        errcheck.style.display="none"    
     }
    else if(!check.checked)
    {
      errcheck.style.display="block" 
    }
    else {
      errcheck.style.display="none" 
    }
    

})


