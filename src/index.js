import logInTemplate from './templates/logIn';
import registerTemplate from './templates/register';
import wallTemplate from './templates/wall';
import events from './events';

const contentDiv = document.querySelector('.content');

let routes = {
  '/': {
    template: logInTemplate,
    events: events.addEventsExample
  },
  '/index.html': {
    template: logInTemplate,
    events: events.addEventsExample
  },
  '/ingresar':  {
    template: logInTemplate,
    events: events.addEventsExample
  },
  '/registrar':  {
    template: registerTemplate,
    events: events.addEventsExample
  },
  '/muro': wallTemplate,
};

// window.onpopstate = function (event) {
//   location.pathname
// }

let onNavItemClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  window.history.pushState({}, pathName, window.location.origin + pathName);
  window.history.back()
  contentDiv.innerHTML = routes[pathName].template;
  routes[pathName].events()
}

contentDiv.innerHTML = routes[window.location.pathname].template;

events.addEventsExample();
export { onNavItemClick }
