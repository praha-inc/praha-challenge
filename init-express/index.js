const express = require('express');

const app = express();
const port = 8080; // default port to listen

app.use(express.json());

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.post('/', (req, res) => {
  res.send(`body2: ${JSON.stringify(req.body)}`);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
