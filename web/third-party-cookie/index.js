const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const port = 8080; // default port to listen

app.use(express.static('public'), express.json(), cookieParser());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/cookie', (req, res) => {
  res.send(`cookies: ${JSON.stringify(req.cookies)}`);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

// note: 以下、サードパーティクッキーを配信するサーバ

const appThird = express();
appThird.use(express.static('public-third', {
  setHeaders: (req, res, stat) => {
    req.setHeader('Set-cookie', 'name=hoge;SameSite=none;secure=true');
  },
}), express.json(), cookieParser());

appThird.get('/', (req, res) => {
  res.send(`cookies: ${JSON.stringify(req.cookies)}`);
});
appThird.listen(8081, () => {
  console.log(`server started at http://localhost:${8081}`);
});
