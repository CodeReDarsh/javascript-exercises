const getTheTitles = function(array) {
  return array.reduce((titles, obj) => {
    titles.push(obj.title);
    return titles;
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
