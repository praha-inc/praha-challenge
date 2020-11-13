class Add implements Calculatable {
  public calculate(numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val)
  }
}

class Subtract implements Calculatable {
  public calculate(numbers: number[]): number {
    return numbers.reduce((acc, val) => acc - val)
  }
}

class Multiply implements Calculatable {
  public calculate(numbers: number[]): number {
    console.log('multi');
    return numbers.reduce((acc, val) => acc * val)
  }
}

class Complex implements Calculatable {
  public calculate(numbers: number[]): number {
    return (numbers.slice(0,2).reduce((acc, val) => acc + val) + 3) * 4 - 10
  }
}

type CalculationType = 'add' | 'subtract' | 'multiply' | 'complex'

export interface Calculatable {
  calculate(number: number[]): number
}

export const calculatableFactory = (calculationType: CalculationType): Calculatable => {
  if (calculationType === 'add') {
    return new Add()
  }
  if (calculationType === 'subtract') {
    return new Subtract()
  }
  if (calculationType === 'complex') {
    return new Complex()
  }
  if (calculationType === 'multiply') {
    return new Multiply()
  }

  throw new Error('invalid calculationType')
}
