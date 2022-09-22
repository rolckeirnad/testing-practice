import calculator from "./calculator";

test('Calculator is an object', () =>
  expect(typeof calculator).toBe('object')
)

test('Contains sum, subtract, multiply and divide', () =>
  expect(calculator).toMatchObject({
    sum: expect.any(Function),
    subtract: expect.any(Function),
    multiply: expect.any(Function),
    divide: expect.any(Function),
  })
)

test('Return error on missing arguments', () => {
  expect(() => calculator.sum()).toThrowError("missing")
  expect(() => calculator.subtract()).toThrowError("missing")
  expect(() => calculator.multiply()).toThrowError("missing")
  expect(() => calculator.divide()).toThrowError("missing")
})

test('Return error on missing argument', () => {
  expect(() => calculator.sum(1)).toThrowError("missing")
  expect(() => calculator.subtract(5)).toThrowError("missing")
  expect(() => calculator.multiply(2)).toThrowError("missing")
  expect(() => calculator.divide(2)).toThrowError("missing")
})

test('Return error on invalid argument', () => {
  expect(() => calculator.sum(1, "2s")).toThrowError("invalid")
  expect(() => calculator.subtract("e3e", 1)).toThrowError("invalid")
  expect(() => calculator.multiply(2, "2s33")).toThrowError("invalid")
  expect(() => calculator.divide("5a", 2)).toThrowError("invalid")
})

test('Accept string values', () => {
  expect(calculator.sum("2", "5")).toBe(7)
  expect(calculator.subtract("6", "2")).toBe(4)
  expect(calculator.multiply("3", "3")).toBe(9)
  expect(calculator.divide("6", "2")).toBe(3)
})

test('Accept number values', () => {
  expect(calculator.sum(2, 5)).toBe(7)
  expect(calculator.subtract(6, 2)).toBe(4)
  expect(calculator.multiply(3, 3)).toBe(9)
  expect(calculator.divide(6, 2)).toBe(3)
})

test('Accept mixed values', () => {
  expect(calculator.sum(2, "5")).toBe(7)
  expect(calculator.subtract("6", 2)).toBe(4)
  expect(calculator.multiply(3, "3")).toBe(9)
  expect(calculator.divide("6", 2)).toBe(3)
})
