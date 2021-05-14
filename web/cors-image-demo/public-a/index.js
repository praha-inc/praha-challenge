const image = new Image();
const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');
image.src = 'http://05ed08c45761.ngrok.io/cat.jpg';
image.crossOrigin = 'Anonymous';
image.onload = function () {
  ctx.drawImage(this, 40, 40);
};

const request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8081/test');
request.setRequestHeader('accept', 'application/json');
request.send();
