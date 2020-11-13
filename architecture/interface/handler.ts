import { Calculatable, calculatableFactory } from "./calculator"
import { Saveable, saveableFactory } from "./repository"

class ClaculationHandler {
  constructor(private calculator: Calculatable, private repository: Saveable) {}

  public do(numbers: number[]) {
    const result = this.calculator.calculate(numbers)
    this.repository.save(result)
    return result
  }
}

export const handleRequest = (numbers: number[], calc: any, repo: any) => {
  const controller = new ClaculationHandler(calculatableFactory(calc), saveableFactory(repo) )
  return controller.do(numbers)
}