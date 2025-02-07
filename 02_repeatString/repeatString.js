const repeatString = function(string, num) {
    let output = "";
    
    switch(true) {
        case num > 0:
            for(let i = 0; i < num; i++) {
                output += string;
            }
            break;
        case num == 0:
            break;
        case num < 0:
            output = "ERROR";
            break;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
