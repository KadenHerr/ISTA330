/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    let count = 0;
    retVal = [];

    for(var i = 0; i < input.length;i++) {
        count = 0;
        for(var j = 0; j < input.length;j++) {

            // Do not compare the same elements
            if(i == j) {
                continue;
            }

            // If the conditions are met, increment the counter
            if(input[i]<input[j] && (input[j] % 2) == 0) {
                count++;
            }
        }
        // Store the counter in the return array
        retVal.push(count);
    }

    return retVal;
};