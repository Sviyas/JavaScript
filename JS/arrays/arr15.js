function myFunction(...arrays) {
  return arrays.flat();
}
console.log(myFunction([1, 2, 3], [4, 5, 6]));
console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]));
console.log(myFunction([true, true], [1, 2], ['a', 'b']));

// ? concat all the arrays in on one arrys
