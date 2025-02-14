const findTheOldest = function(input) {
    let ageArray = input.map((person) => {
        if(person.yearOfDeath == undefined) {
            return new Date().getFullYear() - person.yearOfBirth;
        }else {
            return person.yearOfDeath - person.yearOfBirth;
        }
    });
    
    return input.splice(ageArray.indexOf(Math.max(...ageArray)), 1)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
