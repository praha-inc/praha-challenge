const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const port = 8080; // default port to listen

app.use(express.static('public'), express.json(), cookieParser());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

const mockDB = {};

// note: 以下、サードパーティクッキーを配信するサーバ
const appThird = express();
appThird.use((req, res, next) => {
  const accessSite = req.header('referer');
  if (mockDB[accessSite] !== undefined) {
    mockDB[accessSite] += 1;
  } else {
    mockDB[accessSite] = 0;
  }
  res.locals.referer = accessSite;
  next();
}, express.static('public-third', {
  setHeaders: (res, path, stat) => {
    res.cookie('trackingId', 1, { sameSite: 'none', secure: true });
    res.cookie('accessSite', res.locals.referer, { sameSite: 'none', secure: true });
  },
}), express.json(), cookieParser());

appThird.listen(8081, () => {
  console.log(`server started at http://localhost:${8081}`);
});

// note: 同じトラッキングクッキーを埋め込んだ別のサイト
const app2 = express();
app2.use(express.static('public'), express.json(), cookieParser());
app2.listen(8082, () => {
  console.log(`server started at http://localhost:${8082}`);
});
