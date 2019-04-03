import { elementClick } from './index';
import signUp from './firebase';
import logIn from './firebase';
import logOut from './firebase';

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

  function logInOption() {
    elementClick('/ingresar');
  }

  function registerOption() {
    elementClick('/registrar');
  }

if (btnRegisterx ) {
  btnRegisterx.addEventListener('click', prueba20);
}

if (btnLogx) {
  btnLogx.addEventListener('click', prueba21);
}

function prueba20() {
  console.log("alv prro")
}

function prueba21() {
  console.log("holis");
}

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
