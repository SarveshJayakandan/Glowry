var form = document.getElementById("Form");
form.addEventListener("submit", function(event){
    var passwords = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirm-password").value;
    if (passwords !== confirmpassword) {
        alert('Passwords do not match try again');
        event.preventDefault();
    }
    
});
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBuXkypNo29cYtSgjrSGcD22UmAHjzKQUc",
   authDomain: "glowry-ce937.firebaseapp.com",
   projectId: "glowry-ce937",
   storageBucket: "glowry-ce937.appspot.com",
   messagingSenderId: "315568377016",
   appId: "1:315568377016:web:7f35e7890f9be5be04784d",
   measurementId: "G-H3LCKSEE9X"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

const auth = firebase.auth()
const database = firebase.database()
 
function signup(){
   Name = document.getElementById('name').value
   age = document.getElementById('age').value
   email = document.getElementById('email').value
   contact = document.getElementById('contact').value
   pass = document.getElementById('password').value
   conpass = document.getElementById('confirmpassword').value
}
function validate_email(email)