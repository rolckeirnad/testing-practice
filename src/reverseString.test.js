import reverseString from "./reverseString";

test('empty call', () =>
  expect(reverseString()).toBe("")
)

test('output is string', () => {
  expect(typeof reverseString(9)).toBe("string");
})

test('numeric output', () =>
  expect(reverseString(90)).toBe("09")
)

test('"" to "" ', () =>
  expect(reverseString("")).toBe("")
)

test('" " to " " ', () =>
  expect(reverseString(" ")).toBe(" ")
)

test('"reverse" to "esrever" ', () =>
  expect(reverseString("reverse")).toBe("esrever")
)

test('"this string is reversed" to "desrever si gnirts siht" ', () =>
  expect(reverseString("this string is reversed")).toBe("desrever si gnirts siht")
)
