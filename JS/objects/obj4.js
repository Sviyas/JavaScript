function myFunction(obj, b) {
  var value = obj;
  for (a of b) {
    value = value[a] ? true : false;
  }
  return value;

  // return Boolean(obj[b]);  in line code concise
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b'));
console.log(myFunction({ x: 'a', y: null, z: 'c' }, 'y'));
console.log(myFunction({ x: 'a', b: 'b', z: undefined }, 'z'));

// console.log(myFunction(5,7))
