function dropRightelement(arr, num) {
  if (arr.length <= num) {
    return arr;
  } else {
    let newarr = arr.slice(-0, arr.length - num);
    return newarr;
  }
}
console.log(dropRightelement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(dropRightelement([1, 2, 3], 6));
console.log(dropRightelement([1, 2, 3, 4, 5, 6, 7, 8], 3));

// ?? return ?? remove the last  element of array
