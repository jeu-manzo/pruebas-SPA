import logInTemplate from './templates/logIn';
import registerTemplate from './templates/register';
import wallTemplate from './templates/wall';

import { elementClick } from './index'

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      elementClick('/muro');
      var user = firebase.auth().currentUser;
      if(user != null){
      const emailId = user.email;
      elementClick('/registrar');
      document.getElementById('saludo').innerHTML = 'hola bienvenido' + emailId;
      }
    } else {
      // No user is signed in.
      elementClick('/ingresar');
    }
  });


  //Registrar Usuario con correo y contraseña
document.querySelector('.btn-register').addEventListener('click', console.log("holi"));
function signUp () {
const userEmail = document.getElementById('email').value;
const userPassword = document.getElementById('password').value;
firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  });
}

// Iniciar sesión

document.querySelector('.btn-logIn').addEventListener('click', logIn);
function logIn() {
    const userEmail = document.getElementById('emailIn').value;
    const userPassword = document.getElementById('passwordIn').value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
    }





// Cerrar sesión
document.getElementById('logout').addEventListener('click',logOut);
function logOut() {
    firebase.auth().signOut();
}

// document.getElementById("logInWindow").addEventListener('click',logInOption);
// function logInOption () {
//     console.log("holis login");
//     elementClick('/ingresar');
// }
//
// document.getElementById("registerWindow").addEventListener('click',registerOption);
// function registerOption () {
//   console.log("holi registrar");
//     elementClick('/registrar');
// }
