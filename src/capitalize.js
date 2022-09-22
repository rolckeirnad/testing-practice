function capitalize(string = "") {
  const newString = string.toString().split("").reduce((str, v, i) => {
    if (i == 0) return str + v.toUpperCase();
    else return str + v.toLowerCase();
  }, "");
  return newString;
}

export default capitalize;
