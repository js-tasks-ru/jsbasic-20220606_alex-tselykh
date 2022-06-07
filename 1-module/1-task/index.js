function factorial(num) {
  let accumulator = num;
  
  for (let i = num - 1; i >= 1; i--) {
    accumulator *= i;
  }

  if (num === 0 || num === 1) {
    return 1;
  } else {
    return accumulator;
  }
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
