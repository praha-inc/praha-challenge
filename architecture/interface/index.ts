import express, { Request, Response } from 'express';
import { handleRequest } from './handler';

const app = express();
const port = 8080; // default port to listen

app.use(express.json());

const castAsNumber = (input: any) => {
  return Number(input)
}

app.get('/calc', (req: Request, res: Response) => {
  const {num1: _num1, num2: _num2, num3: _num3, calc, repo } = req.query;
  const castedNumbersWithoutUndefined = [_num1,_num2,_num3].map((num) => castAsNumber(num)).filter((num) => num)
  const result = handleRequest(castedNumbersWithoutUndefined,calc,repo)
  res.send(JSON.stringify(result));
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
