const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

const port = 8080;

const mockDB = {};

app.use(cookieParser());

app.use((req, res, next) => {
  const referer = req.header('referer');

  if (mockDB[referer]) {
    mockDB[referer] += 1;
  } else {
    mockDB[referer] = 1;
  }

  next();
}, express.static('public-adsense', {
  // setHeaders: (res, path, stat) => {
  //   res.cookie('id', 1, {
  //     sameSite: 'none',
  //     secure: true,
  //   });
  // },
}));

app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

const siteA = express();
siteA.use(express.static('public-a'));
siteA.listen(8081, () => {
  console.log('おいらは8081で待機してるよ');
});
siteA.get('/test', (req, res) => {
  res.setHeader('content-type', 'audio/aac');
  res.send('test');
});

const siteB = express();
siteB.use(express.static('public-b'));
siteB.listen(8082, () => {
  console.log('おいらは8082で待機してるよ');
});
