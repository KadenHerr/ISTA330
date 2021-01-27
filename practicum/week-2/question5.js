/*
Given a non-negative integer, we want to reduce it to zero. 
We are allowed to do one of the following three operations:
1. divide the number by 3
2. divide the number by 4
3. subtract 1 from the number
Find the minimum number of operations to reduce a given number to zero.
Example: 
input: 12
output: 3
12 divided by 4 becomes 3 which divided by 3 becomes 1. The third and last step is the substraction by one operation.
*/

var minimalReduction = function(n) {

    return helper(0,n,n);
};

function helper(curSteps, fewestSteps, number) {

    // Prune step.
    if(curSteps >= fewestSteps || number < 0) {
        return fewestSteps;
    }
    
    // Base case
    if(number==0) {
        if(curSteps < fewestSteps) {
            fewestSteps = curSteps;
        }
        return fewestSteps;
    }

    // Recursive cases
    fewestSteps = helper(curSteps + 1, fewestSteps,number / 3);
    fewestSteps = helper(curSteps + 1, fewestSteps,number / 4);
    fewestSteps = helper(curSteps + 1, fewestSteps,number - 1);

    return fewestSteps;
}

console.log(minimalReduction(15));

