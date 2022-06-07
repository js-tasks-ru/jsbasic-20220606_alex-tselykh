function ucFirst(str) {
  if (str === '') {
    return str;
  } else if (str.length > 0) {
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
  }
}
