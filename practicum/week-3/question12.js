/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    let fib = [1,1];

    // Base cases
    if(n==1 || n==2) {
        return 1;
    }
    // Recursive case
    for(let i=2; i<n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n-1];
};