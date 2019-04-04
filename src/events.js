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
  btnRegisterx.addEventListener('click', () => signUp());
}



if (btnLogx) {
  btnLogx.addEventListener('click', () => logIn());
}
}

function wallEvents() {
  const logOutBtn = document.querySelector('#logout');
  if (logOutBtn) {
    logOutBtn.addEventListener('click', () => logOut())
  }
}

export default {
  homeEvents,
  wallEvents
}
