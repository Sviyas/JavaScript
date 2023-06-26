function findNthSmallest(arr, n) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Return the element at index n-1
  return arr[n - 1];
}

// Example usage
const array = [9, 4, 2, 7, 5];
const n = 3;

const nthSmallest = findNthSmallest(array, n);
console.log(`The ${n}th smallest element is: ${nthSmallest}`);
