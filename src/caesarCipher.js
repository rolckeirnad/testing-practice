function caesarCipher(string = "", k = 1) {
  const shift = k % 26;
  const arr = string.split("");
  const result = arr.reduce((str, char) => {
    if (char.toLowerCase() === char.toUpperCase()) return str + char; // Return punctuation character
    const base = char.charCodeAt() < 97 ? 65 : 97; // Check if is lowercase or uppercase
    let offset = base + (((char.charCodeAt() - base) + shift) % 26); // Calculate offset
    return str + String.fromCharCode(offset);
  }, "");
  return result;
}

export default caesarCipher;
