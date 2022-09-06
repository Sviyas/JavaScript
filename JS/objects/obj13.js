function myFunction(obj)
{
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}
console.log(myFunction({z:'a',y:'b',x:'c',w:'d'}));

// Swap the object key value pairs