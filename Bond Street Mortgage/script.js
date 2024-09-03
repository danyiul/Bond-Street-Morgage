// Change style of navbar when scrolled down enough
// Taken from W3Schools 
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

function openCoolWebsite() {
    window.open("https://classroom.google.com/c/NjE3NjUwNDczNjMx/a/NjE3NjUyNTA5NDA0/details", "_blank");
}

// These lines of code from Nick don't actually work but they look cool
const msgForm = document.getElementById('msgForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const msgInput = document.getElementById('msgInput');

msgForm.onsubmit = function () {
    if (isEmpty(nameInput) || isEmpty(emailInput) || isEmpty(msgInput)) {
        this.preventDefault;
        alert("Please fill out everything and leave nothing empty");
    }
};

function isEmpty(input) {
    return input.value.isEmpty();
}