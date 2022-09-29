function myFunction(a, b) {
  return Math.abs(a - b) <= 24 * 60 * 60 * 1000;
}
console.log(myFunction(new Date('2022/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00')));
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00')));
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00')));

//  check if two dates between one hour less than or more
