function myFunction(a,b)
{
    return  a.has(b);
}

console.log(myFunction(new Set([1, 2, 3]), 2));
console.log(myFunction(new Set([123]), 2));
console.log(myFunction(new Set(['1', '2', '3']), '2'));
console.log(myFunction(new Set('123'), '2'));

//  check the values are present in set ?