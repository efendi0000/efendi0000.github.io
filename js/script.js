const submitButton = document.getElementById('btnSubmit');

function validateContactForm(event) {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneNumberInput").value;
    const msg = document.getElementById("msgInput").value;
    const alpha_regex = /^[A-Za-z]+$/;
    const numeric_regex = /^[0-9]+$/;
    const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let text;
    
    if (!name) {
        text = "Name cannot be empty";
    } else if (!name.match(alpha_regex)) {
        text = "The name must be alphabetic";
    } else if (!email) {
        text = "Email cannot be empty";
    } else if (!regex_pattern.match(email_regex)) {
        text = "Invalid Email";
    } else if (!phone) {
        text = "Phone Number cannot be empty";
    } else if (!phone.match(numeric_regex)) {
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
    event.preventDefault();
}

submitButton.addEventListener('click', validateContactForm);
