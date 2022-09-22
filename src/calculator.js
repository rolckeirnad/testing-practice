const calculator = (() => {
  const sum = (a = null, b = null) => {
    const [num1, num2] = checkError(a, b);
    return num1 + num2;
  };
  const subtract = (a = null, b = null) => {
    const [num1, num2] = checkError(a, b);
    return num1 - num2;
  };
  const divide = (a = null, b = null) => {
    const [num1, num2] = checkError(a, b);
    return num1 / num2;
  };
  const multiply = (a = null, b = null) => {
    const [num1, num2] = checkError(a, b);
    return num1 * num2;
  };
  const checkError = (a, b) => {
    switch (true) {
      case (a === null):
      case (b === null):
        throw new Error('missing argument')
      case (a === ""):
      case (b === ""):
        throw new Error('empty value')
      default:
        // Convert to number and check for NaN
        const [num1, num2] = [Number(a), Number(b)];
        if (isNaN(num1) || isNaN(num2)) throw new Error('invalid input')
        else return [num1, num2]
    }
  };
  return {
    sum,
    subtract,
    divide,
    multiply,
  }
})()

export default calculator;
