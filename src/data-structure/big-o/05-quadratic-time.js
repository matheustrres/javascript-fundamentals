/**
 * Typical behavior of brute force algorithms in two-dimensional structures
 */

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

const desorderedArray = [64, 34, 25, 12, 22, 11, 90, 10, 82, 81, 29, 37, 71, 54];
console.log(bubbleSort(desorderedArray)); // O(n²) [10, 11, 12, 22, 25, 29, 34, 37, 54, 64, 71, 81, 82, 90]