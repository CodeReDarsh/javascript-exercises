const sumAll = function (a, b) {
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  lowerLimit = Math.min(a, b);
  upperLimit = Math.max(a, b);
  let sum = 0;
  for (let i = lowerLimit; i <= upperLimit; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
