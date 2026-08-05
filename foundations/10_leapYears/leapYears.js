const leapYears = function (year) {
  /**
   * non-century years divisible by 4 are leap years,
   * otherwise century years divisible by 400 are leap years
   */
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
