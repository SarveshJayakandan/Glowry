var form = document.getElementById("Form");
form.addEventListener("submit", function(event){
    var passwords = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirm-password").value;
    if (passwords !== confirmpassword) {
        alert('Passwords do not match try again');
        event.preventDefault();
    }
    
});

function Power(){
    window.location.href = "Signup.html";
}
function Power2(){
    window.location.href = "login.html";
}
