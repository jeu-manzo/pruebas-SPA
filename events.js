if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
  document.getElementById('btn-test').addEventListener('click', showAnother);
}
function showAnother() {
  onNavItemClick('/otro.html');
}
