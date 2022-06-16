function showSalary(users, age) {

  const resultArr = users.filter(user => user.age <= age).map(user => `${user.name}, ${user.balance}`);
  let resultString = '';

  for (let i = 0; i < resultArr.length; i++) {
    if (i === resultArr.length - 1) {
      resultString += resultArr[i];
    } else {
      resultString += resultArr[i] + '\n';
    }
  }

  return resultString;
}
