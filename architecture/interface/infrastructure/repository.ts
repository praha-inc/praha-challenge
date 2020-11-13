import { Saveable } from "../usecase/interfaces/saveable"

class SaveToDB implements Saveable {
  public save(num: number): void {
    console.log(`saved to DB!!: ${num}`)
  }
}
class SaveToFile implements Saveable {
  public save(num: number): void {
    console.log(`saved to file!!: ${num}`)
  }
}
class JustLog implements Saveable {
  public save(num: number): void {
    console.log(`logged!!: ${num}`)
  }
}

type RepositoryType = 'db' | 'file' | 'log'

export const saveableFactory = (repositoryType: RepositoryType): Saveable => {
  if (repositoryType === 'db') {
    return new SaveToDB()
  }
  if (repositoryType === 'file') {
    return new SaveToFile()
  }
  if (repositoryType === 'log') {
    return new JustLog()
  }

  throw new Error('invalid repositoryType')
}
