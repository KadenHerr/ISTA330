/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    let highest = -1;
    let count = 0;
    let previous = [];

    for(let i=0; i<input.length; i++) {
        // Check that you are not search for previous searched values.
        if(previous.includes(input[i])) {
            continue;
        } else {
            previous.push(input[i]);
        }
        
        // Count how many times the array contains a duplicate of the i-th element.
        for(let j=i; j<input.length; j++) {
            if(input[i] == input[j]) {
                count++;
            }
        }
        // Check if the i-th element matches its count.
        if(count == input[i]) {
            if(count > highest) {
                highest = count;
            }
        }
        count = 0;
    }
    return highest;
};