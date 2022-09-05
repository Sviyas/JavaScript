function myFunction(d)
{
    return ((~~(d.getMiutes() /15)+1)*15)%60
}

console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 22, 00)));

//  Return the next nearest quarter hour of a date
