/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let count = 1;
    let goal = Math.floor(input.length/2) + 1;
    for(let i=0; i<input.length - 1; i++) {
        for(let j=i+1; j<input.length; j++) {
            if(input[i] == input[j]) {
                count++;
            }
        }
        if(count >= goal) {
            return input[i];
        }
        count = 1;
    }
    return -1;
};