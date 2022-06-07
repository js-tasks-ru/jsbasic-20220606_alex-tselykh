function factorial(num) {
  let accumulator = num;
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = num - 1; i >= 1; i--) {
      accumulator *= i;
    }
  }
  return accumulator;
}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(3));
