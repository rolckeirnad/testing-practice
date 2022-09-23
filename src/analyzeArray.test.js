import analyzeArray from "./analyzeArray";

test('Function returns an object', () =>
  expect(typeof analyzeArray()).toBe('object')
)

test('Contains the following properties: average, min, max and length', () =>
  expect(analyzeArray()).toMatchObject({
    average: expect.anything(),
    min: expect.anything(),
    max: expect.anything(),
    length: expect.anything(),
  })
)

test('[1,8,3,4,2,6]', () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
)
