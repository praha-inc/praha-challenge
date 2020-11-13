import express, { Request, Response } from 'express';
import { calculatableFactory } from './domain/calculator';
import { saveableFactory } from './infrastructure/repository';
import { CalculateValuesUsecase } from './usecase/calculate-values';
import { castAsNumber } from './util/number';

const app = express();
const port = 8080; // default port to listen

app.use(express.json());

app.get('/calc', (req: Request, res: Response) => {
  // memo: requestのパース
  const {num1: _num1, num2: _num2, num3: _num3, calc, repo } = req.query;

  // memo: 値のキャスト、ドメインに依存しないバリデーション
  const castedNumbersWithoutUndefined = [_num1,_num2,_num3].map((num) => castAsNumber(num)).filter((num) => num)

  const usecase = new CalculateValuesUsecase(calculatableFactory(calc as any), saveableFactory(repo as any) )

  // memo: 処理の実施
  const result = usecase.do(castedNumbersWithoutUndefined)
  res.send(JSON.stringify(result));
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
