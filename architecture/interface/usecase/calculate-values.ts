import { Calculatable } from "../domain/calculator"
import { Saveable } from "./interfaces/saveable" // memo: 依存性の逆転。永続化に関わるSaveableのインターフェースをusecase層に配置することで、infrastructure/repository.tsがusecaseに依存するようになる

export class CalculateValuesUsecase {
  // memo: 依存性の注入。usecaseに渡すcalculatable,saveableは、いくらでもモック化することが可能
  constructor(private calculator: Calculatable, private repository: Saveable) {}

  public do(numbers: number[]) {
    const result = this.calculator.calculate(numbers) // memo: インターフェースを使うことで、calculatorの中身を変えようとも、usecaseには変更を加えなくて済む
    this.repository.save(result) // memo: こちらもインターフェースを使うことで同上
    return result
  }
}
