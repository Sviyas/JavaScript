function myFunction(arr) {
  return arr.sort((a, b) => {
    return a.a < a.a ? 1 : -1;
  });
}

console.log(
  myFunction([
    { a: 2, b: 10 },
    { a: 5, b: 4 }
  ])
);
console.log(
  myFunction([
    { a: 10, b: 7 },
    { a: 2, b: 1 }
  ])
);
console.log(
  myFunction([
    { a: 2, b: 10 },
    { a: 5, b: 4 }
  ])
);
console.log(
  myFunction([
    { a: 1, b: 2 },
    { a: 5, b: 4 }
  ])
);
console.log(
  myFunction([
    { a: 1, b: 7 },
    { a: 2, b: 1 }
  ])
);

// ? sorting array by object property in ?
