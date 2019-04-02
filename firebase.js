// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       onNavItemClick('/registrar');
//       var user = firebase.auth().currentUser;
//       if(user != null){
//       const emailId = user.email;
//       onNavItemClick('/wall');
//       // document.getElementById('saludo').innerHTML= 'hola bienvenido' + emailId;
//       }
//     } else {
//       // No user is signed in.
//       onNavItemClick('/ingresar');
//     }
//   });
//
//
//   //Registrar Usuario con correo y contraseña
// document.getElementById('register').addEventListener('click',signUp);
// function signUp () {
// const userEmail = document.getElementById('email').value;
// const userPassword = document.getElementById('password').value;
// firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert(errorMessage);
//     // ...
//   });
// }
//
// // Iniciar sesión
//
// document.getElementById('openAccount').addEventListener('click', logIn);
// function logIn() {
//     const userEmail = document.getElementById('emailIn').value;
//     const userPassword = document.getElementById('passwordIn').value;
//     firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         alert(errorMessage);
//         // ...
//       });
//     }




// // Cerrar sesión
// document.getElementById('logout').addEventListener('click',logOut);
// function logOut() {
//     firebase.auth().signOut();
// }
