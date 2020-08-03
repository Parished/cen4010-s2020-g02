  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCVEmzcsAVpNQaHhA-44jCXhWzCN1H8uUg",
    authDomain: "what2watch-aad2b.firebaseapp.com",
    databaseURL: "https://what2watch-aad2b.firebaseio.com",
    projectId: "what2watch-aad2b",
    storageBucket: "what2watch-aad2b.appspot.com",
    messagingSenderId: "490757421579",
    appId: "1:490757421579:web:45d2c61171f8fe7a17e50e",
    measurementId: "G-C3WEFPTJCH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

//signup
const signup_form = document.querySelector('#signup_form');
//login
const login_form = document.querySelector('#login_form');



if (signup_form != null) {
document.getElementById('signup_button').addEventListener('click', (e) => {
e.preventDefault();

    
const email = signup_form['email_sign_up'].value;
const password = signup_form['password_sign_up'].value;
const name = signup_form['name_sign_up'].value;

auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);
    signup_form.reset();
    cred.user.name = name;
    window.location = 'index.html';
    console.log(cred.user.name);
    
}).catch(function(error){
    alert(error);
});
//console.log(email, password);
});
};

document.getElementById('signin_button').addEventListener('click', (e) => {
e.preventDefault();
    
    

const email = login_form['email_login_already'].value;
const password = login_form['password_login_already'].value;
    
auth.signInWithEmailAndPassword(email, password).then( cred => {
    
    let username = cred.user.email;
    let useremail = cred.user.name;
    
    console.log(username,useremail);
    
    
    login_form.reset();
    window.location = 'index.html';

    
}).catch(function(error){
    
    alert(error);
    
});


    
    
});

