function sumSalary(salaries) {
  let initSum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] === 'number') {
      if (!isNaN(salaries[key]) && salaries[key] !== Infinity && salaries[key] !== -Infinity) {
        initSum += salaries[key];
      }
    }
  }
  return initSum;
}
