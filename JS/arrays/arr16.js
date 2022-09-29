function myFunction(min, max) {
  let find = [];
  for (let i = min; i <= max; i++) {
    find.push(i);
  }
  return find;
}
console.log(myFunction(2, 10));
console.log(myFunction(1, 3));
console.log(myFunction(-5, 5));

// ?? return the range number between min to max
