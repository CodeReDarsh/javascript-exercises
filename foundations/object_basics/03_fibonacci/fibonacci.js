const fibonacci = function (n) {
  if (!/^[0-9]+$/.test(n)) {
    return "OOPS";
  }
  n = Number(n);
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  }
  let prevFib = 1;
  let curFib = 1;
  for (let m = 3; m <= n; m++) {
    curFib += prevFib;
    prevFib = curFib - prevFib;
  }
  return curFib;
};

// Do not edit below this line
module.exports = fibonacci;
