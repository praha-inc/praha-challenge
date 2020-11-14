const { TestScheduler } = require('jest')
const {add} = require('./calc')

test('1,2 given to add returns 3', () => {
  expect(add(1,2)).toBe(3)
}) 
