const sumAll = function(firstNum, secondNum) {
    let output = 0;
    let temp;

    if(firstNum < 0 || secondNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR";
    }

    if(secondNum < firstNum) {
        temp = secondNum;
        secondNum = firstNum;
        firstNum = temp;
    }

    for(let i = firstNum; i <= secondNum; i++) {
        output += i;
    }

    return output;
};

// Do not edit below this line
module.exports = sumAll;
