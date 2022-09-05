function myFunction(a)
{
    return a.reduce((x,y) => ({...x, [y] : x[y] ? x[y] + 1 : 1}),{})
}

console.log(myFunction([1,2,2,3]));

// convert array to object with counter 