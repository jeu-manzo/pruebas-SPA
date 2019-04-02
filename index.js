const contentDiv = document.querySelector('.content');

function addEventsExample () {
  const loginButton = document.querySelector('.logInWindow')
  const registerButton = document.querySelector('.registerWindow')

  if (loginButton) {
    loginButton.addEventListener('click', logInOption);
  }

  if (registerButton) {
    registerButton.addEventListener('click', registerOption);
  }

  function logInOption() {
    onNavItemClick('/ingresar');
  }

  function registerOption() {
    onNavItemClick('/registrar');
  }
}



let routes = {
  '/': {
    template: logInTemplate,
    events: addEventsExample
  },
  '/index.html': {
    template: logInTemplate,
    events: addEventsExample
  },
  '/ingresar':  {
    template: logInTemplate,
    events: addEventsExample
  },
  '/registrar':  {
    template: registerTemplate,
    events: addEventsExample
  },
  '/muro': wall,
};

window.onpopstate = function (event) {
  console.log(location.pathname)

}

let onNavItemClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  window.history.pushState({}, pathName, window.location.origin + pathName);
  window.history.back()
  contentDiv.innerHTML = routes[pathName].template;
  routes[pathName].events()
}

contentDiv.innerHTML = routes[window.location.pathname].template;
