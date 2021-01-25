/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
    var retval = [];

    // Place the first value to the array.
    if (input.length > 0) {
        retval.push(input[0]); 
    }

    // Place each consecutive sums in the array.
    for(var i = 0; i < input.length - 1; i++) {
        retval.push(retval[i] + input[i+1])
   }

   return retval
};