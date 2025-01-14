/**
 * Execution time doubles with each new element in the input
 */

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(12)); // O(2ⁿ) 144