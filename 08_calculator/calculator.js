const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(number, toThePower) {
	if(toThePower > 0) {
    return number * power(number, --toThePower);
  }else {
    return 1;
  }
};

const factorial = function(input) {
	if(input > 0) {
    return input * factorial(--input);
  }else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
