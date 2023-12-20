function myFunction(...a) {
  const result = a.map(key => {
    return key.firstName;
  });
}
console.log(
  myFunction(
    { firstName: 'Susan', lastName: 'Steward' },
    { firstName: 'Daniel', lastName: 'Longbottom' },
    { firstName: 'Jacob', lastName: 'Black' }
  )
);

// simple map fun returns all elements multiply by 4
