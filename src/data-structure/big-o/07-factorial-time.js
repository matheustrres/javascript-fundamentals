/**
 * Execution time grows extremely fast
 */

function swapArray(array) {
  if (!array.length) return [[]];

  const result = [];

  for (let i = 0; i < array.length; i++) {
    const rest = array.slice(0, i).concat(array.slice(i + 1));
    const restSwaps = swapArray(rest);
    restSwaps.forEach(swap => result.push([array[i], ...swap]));
  }

  return result;
}

console.log(swapArray([1, 2, 3]));
/**
 * O(n!)
 * [
 *  [ 1, 2, 3 ],
 *  [ 1, 3, 2 ],
 *  [ 2, 1, 3 ],
 *  [ 2, 3, 1 ],
 *  [ 3, 1, 2 ],
 *  [ 3, 2, 1 ]
 * ]
 */