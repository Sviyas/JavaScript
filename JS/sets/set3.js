function myFunction(a,b)
{
    a.delete(b)
    return a;
}

console.log(myFunction(new Set([1, 2, 3]), 1));
console.log(myFunction(new Set('12345'), '3'));
console.log(myFunction(new Set([1, 2, 3]), 4));

//  Delete element form set ?