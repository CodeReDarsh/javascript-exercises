const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, currentVal) => sum + currentVal, 0);
};

const multiply = function(array) {
  return array.reduce((prod, currentVal) => prod * currentVal, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(n, prod = 1) {
  if (n === 0) {
    return prod;
  }
  return factorial(n - 1, prod * n);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
