const express = require('express');
const app = express();
const port = 8080; // default port to listen

app.post('/', (req, res) => {
  console.log(req.body);
  // if (req.headers["content-type"] !== 'application/json') {
  //   res.sendStatus(400)
  //   return
  // }
  console.log(req.body);
  res.sendStatus(201);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
