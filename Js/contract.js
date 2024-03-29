const contactNames = document.querySelector("#name")
const nameError = document.querySelector (".contact_name_error")
const contactEmail = document.querySelector("#email")
const emailError = document.querySelector(".contact_email_error")
const contactMessage = document.querySelector("#message")
const messageError = document.querySelector(".contact_message_error")

const form = document.querySelector (".contact_form")


function validateContact (event){
    event.preventDefault();

    if(checkLength(contactNames.value, 0) === true) {
        nameError.style.display = "none";
    } else{
        nameError.style.display = "inline";
    }

    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "inline";
    }

    if(checkLength(contactMessage.value, 9) === true){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "inline";
    }
    feedBack();
}

form.addEventListener("submit", validateContact);


function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const emailPattern = regEx.test(email);
    return emailPattern;
}


const hamburger = document.querySelector(".fa-bars");
const topNav = document.querySelector(".top_nav");

hamburger.addEventListener("click", ()=>{
    if(topNav.style.display === "block"){
        topNav.style.display = "none"
    } else {
        topNav.style.display = "block";
    }
});

const navLogo = document.querySelector(".nav_logo");
navLogo.addEventListener("click", ()=>{
    window.location= "/"
});
/*
function feedBack(){
    messageSent.style.display = "block"
    form.reset();
}
closeMsg.addEventListener("click", closeSentMsg);
function closeSentMsg(){
    messageSent.style.display =  "none"
}
*/
