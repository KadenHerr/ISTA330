/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {

    input.sort;

    if((input.length % 2) == 0) {
        return (input[input.length / 2] + input[Math.floor(input.length / 2)]) / 2;
    } else {
        return input[Math.floor(input.length / 2)];
    }
};