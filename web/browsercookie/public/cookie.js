/* eslint-disable no-undef */
document.cookie = 'id-from-cookie=1';

window.alert(document.cookie);

const button = document.getElementById('fetch-from-8080');
button.addEventListener('click', () => {
  fetch('http://localhost:8080', { credentials: 'include' });
});
