function capitalize(string = "") {
  let array = string.toString().split("").reduce((str, v, i) => {
    if (i == 0) return str + v.toUpperCase();
    else return str + v.toLowerCase();
  }, "");
  return array;
}

export default capitalize;
