function myFunction(a, n) {
  return a.slice(n.length, -n ?? a[n]);
}
console.log(myFunction([1, 2, 3], 6));
console.log(myFunction([1, 2, 3, 4, 5], 2));
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3));

// ?? return first the value argument passing array
