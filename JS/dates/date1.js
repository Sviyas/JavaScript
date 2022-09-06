
function myFunction(a,b)
{
    return a <b;
}
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00')));
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

//  if date is earlier then or not 