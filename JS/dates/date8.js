function myFunction(a,b)
{
    return a.setDate(a.getDate() + b)
}

console.log(myFunction(new Date(Date.UTC(2000,01,01)), 31));
console.log(myFunction(new Date(Date.UTC(2000,01,01)), 10));
console.log(myFunction(new Date(Date.UTC(2000,02,28,)), 2));

// calculate date between n date limit?