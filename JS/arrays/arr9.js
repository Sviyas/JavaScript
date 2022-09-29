function myFunction(arr) {
  let result = [];
  arr.map(a => {
    const nonMatch = arr.filter(match => match !== a);
    {
      result = result.concat(nonMatch);
    }
  });
  return result.length === 0;
}
console.log(myFunction([true, true, true, true]));
console.log(myFunction(['test', 'test', 'test']));
console.log(myFunction([1, 1, 1, 2]));
console.log(myFunction(['10', 10, 10, 10]));

// ?? check the values all are equal or not
