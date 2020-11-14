const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const port = 8080; // default port to listen

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:8081',
};

app.use(express.json(), cors(corsOptions), cookieParser());

app.get('/', (req, res) => {
  console.log(`cookies! ${JSON.stringify(req.cookies)}`);
  res.cookie('server-cookie', 1, { httpOnly: true });
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

const appFE = express();
appFE.use(express.static('public'));
appFE.listen(8081, () => {
  console.log('server started at 8081');
});
