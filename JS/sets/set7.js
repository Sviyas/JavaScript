function myFunction(a,b)
{
        return  new Set([...a,...b]);
}
console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6]));
console.log(myFunction(new Set('12345'), [...'6789']));
console.log(myFunction(new Set([1, 2, 3]), [2, 3]));

// add multiple 