/**
 * No matter how many elements the array has, the function will always return the first element
 */

function getFirstElement(array) {
  return array[0];
}

const arr = [1, 2, 3, 4, 5];
console.log(getFirstElement(arr)); // O(1) 1