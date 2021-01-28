/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {

    inputStr = "" + n;
    let intArr = inputStr.split("");

    // Sort in assending order
    intArr.sort(function(a,b){return a - b});

    return intArr[intArr.length - 1] - intArr[0];
};