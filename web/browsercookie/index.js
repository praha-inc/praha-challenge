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

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.cookie('server-cookie', 1, { httpOnly: true });
  res.send('Hello world!');
});
app.post('/', (req, res) => {
  res.send(`body2: ${JSON.stringify(req.body)}`);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

const appFE = express();
appFE.use(express.static('public'));
appFE.listen(8081, () => {
  console.log('server started at 8081');
});
