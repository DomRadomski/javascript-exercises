const EMPTY_STRING = ""

const repeatString = function(string, num) {
    
    let repeatedString = '';

    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            repeatedString = repeatedString.concat(string);
        }
        return repeatedString
    }

    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
