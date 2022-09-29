function myFunction(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(myFunction(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(myFunction(new Date('2000/11/01'), new Date('2000/01/01')));

//  check two dates fall on exact same day
