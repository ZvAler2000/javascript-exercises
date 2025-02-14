const fibonacci = function(input) {
    let fibonacciArray = [];

    if(input < 0) {
        return "OOPS";
    }

    for(let i = 0; i <= parseInt(input); i++) {
        if(i == 0  || i == 1) {
            fibonacciArray[i] = i;
        }else {
            fibonacciArray[i] = fibonacciArray[i-2] + fibonacciArray[i-1];
        }
    }

    return fibonacciArray[input];
};

// Do not edit below this line
module.exports = fibonacci;
