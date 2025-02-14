const palindromes = function (input) {
    input = input.replace(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    input = input.toLowerCase();
    let reverse = input.split("").reverse().join("");

    return reverse === input;
};

// Do not edit below this line
module.exports = palindromes;
