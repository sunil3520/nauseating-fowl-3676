
import {navbar} from './fp05_185/components/navbar.js';
let navbar_div=document.getElementById('navbar');
navbar_div.innerHTML=navbar();

var signup = document.getElementById("signin_button");
   
signup.addEventListener('click', subbed);
function subbed(){
    
    var mobile = document.getElementById("signup_mobile").value;
    var password = document.getElementById("signup_pass").value;
    localStorage.setItem('mobile', JSON.stringify(mobile));
    localStorage.setItem('password', JSON.stringify(password));
    

}

var login = document.getElementById("login_button");

login.addEventListener('click', subbed2);
function subbed2() {
    
    var mob = JSON.parse(localStorage.getItem('mobile'));
    var pass = JSON.parse(localStorage.getItem('password'));
    var login_mob = document.getElementById("login_mobile").value;
    var login_password = document.getElementById("login_pass").value;

    
   if (mob == login_mob && pass == login_password) {       
         alert('Login Successful')
   }    
   else {
       alert('Login not successful');
       location.reload();
   }
}



function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();


        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});