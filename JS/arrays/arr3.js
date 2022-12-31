function myFunction(arr, e) {
  let value = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] !== e ? value.push(arr[i]) : null;
  }
  return value;
}
console.log(myFunction([1, 2, 3, 4, 5], 2));
console.log(myFunction([1, 2, 3], 6));
console.log(myFunction([1, 2, 3], 6));

// ?? remove specified element of array in programs?
