function myFunction(a,b)
{
    return [new Set([...a,...b])];
}
console.log(myFunction(new Set('123'), new Set('234')));
console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5])));
console.log(myFunction(new Set([false, false, NaN]), new Set([true, true, NaN])));

//  get union of set??