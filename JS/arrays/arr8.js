function myFunction(arr) {
  return arr.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
}
console.log(myFunction(['ar', 'agggge', 'gad']));
//  ?? return the longest string in array
