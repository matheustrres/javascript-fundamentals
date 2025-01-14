/**
 * A mixture of linear and linearithmic growth
 */

function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j])
      result.push(left[i++]);
    else result.push(right[j++]);
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

const desorderedArray = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(desorderedArray)); // O(n log n) [3, 9, 10, 27, 38, 43, 82]