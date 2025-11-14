// Fibonacci with Memoization  – Implement recursive + optimized Fibonacci.:-	impliment for loop and if condition for stoping loop,
//  also using temporary variable for swaping two values, use also recursion function.

function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
// Example usage:
console.log(fibonacci(10));
console.log(fibonacci(50));
console.log(fibonacci(100));
console.log(fibonacci(200));

                 