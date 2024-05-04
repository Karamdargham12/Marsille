// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-SRMGBB0KNd62h0EN8VtjlZuXAZ3Rt2g",
    authDomain: "marsille-travel.firebaseapp.com",
    databaseURL: "https://marsille-travel-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "marsille-travel",
    storageBucket: "marsille-travel.appspot.com",
    messagingSenderId: "613416398489",
    appId: "1:613416398489:web:40d08ae6259041715dd208",
    measurementId: "G-NS7Y7SLP0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


//listen for submit event//(1)
document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);

//Submit form(2)
function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone_number').value;
    let message = document.querySelector('#message').value;

    //send message values(3)
    sendMessage(name, email, phone, message);
}

//Send Message to Firebase(4)
function sendMessage(name, email,phone,message) {
    const database = getDatabase();

    set(ref(database, 'users/' + Math.floor(Math.random() * 10000000)), {
        name: name,
        email: email,
        phone: phone,
        message: message
    }).then(() => {
        //Show Alert Message(5)
        document.querySelector('.alert').style.display = 'block';
        //Hide Alert Message After Seven Seconds(6)
        setTimeout(function () {
            window.location.href='./index.html'
        }, 3000);
        document.getElementById('registrationform').reset();
    }).catch((error) => {
        alert(error)
    })
}