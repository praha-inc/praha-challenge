import express, {Request, Response} from 'express'

const app = express();
const app2 = express()
const port = 8080; // default port to listen
const port2 = 8081

app.use(express.static('public'));

app2.use((_,res,next) => {
  // memo: クライアントのwithCredential=trueの時はallow-origin=*は使えない
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  // memo: クライアントのみならずサーバ側もcredential(cookie)を使うことを許可する必要がある
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
})

// define a route handler for the default home page
app2.get('/', (_: Request, res: Response) => {
  res.cookie('hoge', 'fuga')
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
app2.listen(port2, () => {
  console.log(`server started at http://localhost:${port2}`);
});

