function myArr(a) {
  return a.sort(function (a, b) {
    return b - a;
  });
  // return value;
}
console.log(myArr([1, 3, 2]));
console.log(myArr([4, 2, 3, 1]));
// ? sort descending order
