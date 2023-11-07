const removeFromArray = function(array) {
        
    for (const arg of arguments) {
        let index = 0;
        for (const item of array) {
                
            if (item === arg) {
                array.splice(index,1)
            }

            else {
                index++;
            }
                
        }

    }

        
        
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
