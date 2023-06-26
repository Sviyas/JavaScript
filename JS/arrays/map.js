function myFunction(a) {
  var value = a;
  Object.keys(value).filter(key => {

     return value[key].firstName;
  });
  return value;
}
console.log(
  myFunction(
    { firstName: 'Susan', lastName: 'Steward' },
    { firstName: 'Daniel', lastName: 'Longbottom' },
    { firstName: 'Jacob', lastName: 'Black' }
  )
);

// simple map fun returns all elements multiply by 4
