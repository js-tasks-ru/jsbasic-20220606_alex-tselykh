function getMinMax(str) {
  let arr = str.split(' ').filter(element => parseFloat(element)).map(element => parseFloat(element)).sort((a, b) => a - b);
  const measures = {
    min: Math.min.apply(null, arr),
    max: Math.max.apply(null, arr)
  };
  return measures;
}
