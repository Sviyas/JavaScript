function myFunction(a, b) {
  const hours = Math.abs(a.getHours() - b.getHours());
  const minutes = Math.abs(a.getMinutes() - b.getMinutes());
  const seconds = Math.abs(a.getSeconds() - b.getSeconds());

  return { hours, minutes, seconds };
}
console.log(myFunction(new Date('2022/09/06 02:00:00'), new Date('2001/05/23 11:20:00')));
console.log(myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00')));
console.log(myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00')));

//  calculate the dates between hours , minutes and seconds
