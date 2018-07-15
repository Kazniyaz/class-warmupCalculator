function calculator(num1, num2, op) {
  if (op === 'add') {
    return num1 + num2;
  } else if (op === 'subtract') {
    return num1 - num2;
  } else if (op === 'multiply') {
    return num1 * num2;
  } else {
    return 'wrong operation specified';
  }
}

module.exports = calculator;
