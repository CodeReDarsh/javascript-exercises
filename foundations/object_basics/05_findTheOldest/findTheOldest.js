const findTheOldest = function (people) {
  return people.reduce(
    (oldest, person) => {
      let personDeathYear = new Date().getFullYear();
      if ("yearOfDeath" in person) {
        personDeathYear = person.yearOfDeath;
      }
      let oldestDeathYear = personDeathYear;
      if ("yearOfDeath" in oldest) {
        oldestDeathYear = oldest.yearOfDeath;
      }
      if (
        personDeathYear - person.yearOfBirth >
        oldestDeathYear - oldest.yearOfBirth
      ) {
        oldest = person;
      }
      return oldest;
    },
    {
      yearOfBirth: new Date().getFullYear(),
      yearOfDeath: new Date().getFullYear(),
    },
  );
};

// Do not edit below this line
module.exports = findTheOldest;
