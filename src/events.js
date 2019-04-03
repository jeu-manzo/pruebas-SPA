import { elementClick } from './index'

function homeEvents() {
  const loginButton = document.querySelector('.logInWindow');
  const registerButton = document.querySelector('.registerWindow');
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
