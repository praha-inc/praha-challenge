import express, { Request, Response } from 'express';
import { add, subtract } from './calculate';

const app = express();
const port = 8080; // default port to listen

app.use(express.json());

app.get('/add', (req: Request, res: Response) => {
  const { num1, num2 } = req.query;
  const result = add(Number(num1), Number(num2));
  res.send(JSON.stringify(result));
});

app.get('/subtract', (req: Request, res: Response) => {
  const { num1, num2 } = req.query;
  const result = subtract(Number(num1), Number(num2));
  res.send(JSON.stringify(result));
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
