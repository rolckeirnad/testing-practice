import caesarCipher from "./caesarCipher";

test('return string', () => {
  expect(typeof caesarCipher()).toBe("string")
})

test('empty string', () => {
  expect(caesarCipher("")).toBe("")
  expect(caesarCipher(" ")).toBe(" ")
})

test('offset of 1: "a" is "b"', () => {
  expect(caesarCipher("a")).toBe("b")
})

test('offset of 1: "z" is "a"', () => {
  expect(caesarCipher("z")).toBe("a")
})

test('offset of 1 keeping case', () => {
  expect(caesarCipher("A")).toBe("B")
  expect(caesarCipher("Z")).toBe("A")
})

test('offset of 1: "The Odin Project" is "Uif Pejo Qspkfdu"', () => {
  expect(caesarCipher("z")).toBe("a")
})

test('offset of 1: keeping punctuation', () => {
  expect(caesarCipher("Hello World!, this is a test.")).toBe("Ifmmp Xpsme!, uijt jt b uftu.")
})
