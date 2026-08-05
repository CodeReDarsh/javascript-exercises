const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    arrOfRepeats = [""]
    
    for (let i = 0; i < num; i++) {
        arrOfRepeats.push(string)
    }
    
    return arrOfRepeats.join("");
};

// Do not edit below this line
module.exports = repeatString;
