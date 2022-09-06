function myFunction(a,b)
{
    return new Set([...a].filter((val) => b.has(val)));
}
console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6])));
console.log(myFunction(new Set('12345'), new Set([...'45678'])));
console.log(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4])));

//  filter the matching elements in sets  ?