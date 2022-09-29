function myFunction(arr) {
  // var value  = [];
  return arr.filter(num => {
    return num < 0; // return when there are negative num
  }).length; // find the length of array value
}

console.log(myFunction([4, -3, 2, 1, 0]));
console.log(myFunction([1, -2, 2, -4]));

// ?? return the negative values
