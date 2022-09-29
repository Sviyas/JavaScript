function myFunction(d1, d2) {
  return Math.abs(d1 - d2) / (24 * 60 * 60 * 1000);
}
console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01')));

//  calculate the date between those dates?
