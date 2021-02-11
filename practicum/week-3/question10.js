/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    
    let minDif = Number.MAX_VALUE;
    let curDif;
    let retVal = [];
    
    input.sort(function(a, b){return a - b});

    // Find the minimum difference.
    for(let i=1; i<input.length; i++) {
        curDif = (Math.max(input[i],input[i-1]) - Math.min(input[i],input[i-1]));
        if(curDif < minDif) {
            minDif = curDif;
        }
    }

    // Find the pairs that have this minimum difference.
    for(let i=1; i<input.length; i++) {
        curDif = (Math.max(input[i],input[i-1]) - Math.min(input[i],input[i-1]));
        if(curDif == minDif) {
            retVal.push([input[i-1],input[i]]);
        }
    }
    // Return the minimum difference pairs.
    return retVal;
};
let arr = minPairs([1,-5,-10,24,19,-4,-14,23]);
console.log(arr[0]);