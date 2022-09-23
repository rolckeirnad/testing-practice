function analyzeArray(arr = []) {
  const obj = arr.reduce((obj, curr) => {
    obj.average = obj.average + (curr / obj.length);
    if (curr > obj.max) obj.max = curr;
    if (curr < obj.min) obj.min = curr;
    return obj;
  }, { average: 0, min: arr[0] || 0, max: arr[0] || 0, length: arr.length });
  return obj;
}

export default analyzeArray;
