const palindromes = function (s) {
  const string = [];
  const isAlnum = (s) => /^[a-z0-9]+$/i.test(s);
  /*
    /^[a-z0-9]+$/i
    ^         Start of string
    [a-z0-9]  a or b or c or ... z or 0 or 1 or ... 9
    +         one or more times (change to * to allow empty string)
    $         end of string
    /i        case-insensitive
*/

  for (let c of s) {
    if (isAlnum((c = c.toLowerCase()))) {
      string.push(c);
    }
  }
  s = string.join("");
  for (let i = 0; i <= Math.floor(s.length / 2); i++) {
    if (
      (isAlnum(s[i]) || isAlnum(s[s.length - i - 1])) &&
      s[i] !== s[s.length - i - 1]
    ) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
