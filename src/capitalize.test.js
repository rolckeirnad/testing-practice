import capitalize from "./capitalize";

test('empty input', () => {
  expect(capitalize()).toBe("");
})

test('output is string', () => {
  expect(typeof capitalize(9)).toBe("string");
})

test('output is string', () => {
  expect(capitalize(90)).toBe("90");
})

test("'' to '' ", () => {
  expect(capitalize('')).toBe('');
})

test("' ' to ' ' ", () => {
  expect(capitalize(' ')).toBe(' ');
})

test("'capitalize' to 'Capitalize' ", () => {
  expect(capitalize('capitalize')).toBe('Capitalize');
})

test("'caPiTAliZE' to 'Capitalize' ", () => {
  expect(capitalize('capitalize')).toBe('Capitalize');
})
