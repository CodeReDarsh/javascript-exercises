const removeFromArray = function(arr, ...theArgs) {
    theArgs = new Set(theArgs);
    return arr.filter((item) => !theArgs.has(item));
};

// Do not edit below this line
module.exports = removeFromArray;
