/**
 * Execution time grows proportionally to the size of the input
 */

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

const numbersArray = [1, 2, 3, 4, 5];
console.log(sumArray(numbersArray)); // O(n) 15