import { elementClick } from './index';
import { signUp, logIn, logOut } from './firebase';

function homeEvents() {
  const loginButton = document.querySelector('.logInWindow');
  const registerButton = document.querySelector('.registerWindow');
  const btnRegisterx = document.querySelector('.btn-register');
  const btnLogx = document.querySelector('.btn-logIn');

  if (loginButton) {
    loginButton.addEventListener('click', logInOption);
  }

  if (registerButton) {
    registerButton.addEventListener('click', registerOption);

  }

  function logInOption(event) {
    event.preventDefault();
    console.log('loginoption');
    elementClick('/ingresar');
  }

  function registerOption(event) {
    event.preventDefault();
    elementClick('/registrar');
  }


if (btnRegisterx ) {
  const email1= document.getElementById('email').value;
  const password1 = document.getElementById('password').value;
  btnRegisterx.addEventListener('click', () => signUp(email1, password1));
}



if (btnLogx) {
  const email2 = document.getElementById('emailIn').value;
  const password2 = document.getElementById('passwordIn').value;
  btnLogx.addEventListener('click', () => logIn(email2, password2));
}

// function prueba20() {
//   console.log("registrado")
// }
//
// function prueba21() {
//   console.log("inicio sesión");
// }

  // const logInBtnWall = document.querySelector('.btn-logIn');
  // const registerBtnWall = document.querySelector('.btn-register');
  //
  // if (logInBtnWall) {
  //   logInBtnWall.addEventListener('click', logInWall);
  // }
  //
  // if (registerBtnWall) {
  //   registerBtnWall.addEventListener('click', logInWall);
  // }
  //
  // function logInWall() {
  //   elementClick('/muro');
  // }

}



export default {
  homeEvents
}
