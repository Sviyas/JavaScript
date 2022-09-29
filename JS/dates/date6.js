function myFunction(a, b) {
  return a.getTime() === b.getTime();
}
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

//  check two dates and time are equal or not
