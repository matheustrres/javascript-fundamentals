/**
 * Execution time grows slowly as n increases
 */

function binarySearch(array, target) {
  let start = 0, end = array.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (array[middle] === target) return middle;
    if (array[middle] < target) start = middle + 1;
    else end = middle - 1;
  }

  return -1;
}

const orderedArray = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(orderedArray)); // O(log n) -1
console.log(binarySearch(orderedArray, 7)); // O(log n) 3
console.log(binarySearch(orderedArray, 3)); // O(log n) 1
