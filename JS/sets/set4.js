function myFunction(set)
{
    return [...set]
}

console.log(myFunction(new Set([1, 2, 3])));
console.log(myFunction(new Set([123])));
console.log(myFunction(new Set(['1', '2', '3'])));
console.log(myFunction(new Set('123')));

//  convert set to array ?
