/* eslint-disable no-undef */
document.cookie = 'browser-cookie=1';

console.log(document.cookie);

// memo: サーバにリクエストを飛ばす
const button = document.getElementById('fetch-from-8080');
button.addEventListener('click', () => {
  fetch('http://localhost:8080', { credentials: 'include' });
});

// memo: サーバから送られてきたクッキーの内容を変える
const buttonModify = document.getElementById('rewrite-server-cookie');
buttonModify.addEventListener('click', () => {
  document.cookie = 'server-cookie=modifiedCookie';
});
