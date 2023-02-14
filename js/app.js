const hamburgerButton = document.getElementById('hamburger')
const submitButton = document.getElementById('btnSubmit')
const navList = document.getElementById('nav-list')

function toogleButton() {
    navList.classList.toggle('show')
}

function validateContactForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const msg = document.getElementById("msg").value;
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let text;
    
    if (!name) {
        text = "Name cannot be empty";
    } else if (!name.match(/^[A-Za-z]+$/)) {
        text = "The name must be alphabetic";
    } else if (!email) {
        text = "Email cannot be empty";
    } else if (!regex_pattern.test(email)) {
        text = "Invalid Email";
    } else if (!phone) {
        text = "Phone Number cannot be empty";
    } else if (!phone.match(/^[0-9]+$/)) {
        text = "The phone number must be numeric";
    } else if (phone.length < 10 || phone.length > 12) {
        text = "Invalid Phone Number";
    } else if (!msg) {
        text = "Message cannot be empty";
    } else if (msg.length < 5 || phone.length > 5000) {
        text = "Minimal 5 dan Maksimal 5000 Character";
    } else {
        text = "Submit OK";
    }

    document.getElementById("feedback").innerHTML = text;
}

hamburgerButton.addEventListener('click', toogleButton)
submitButton.addEventListener('click', validateContactForm)
