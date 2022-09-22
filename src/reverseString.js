function reverseString(string = "") {
  const newString = string.toString().split("").reduceRight((string, char) => string + char, "");
  return newString;
}

export default reverseString;
