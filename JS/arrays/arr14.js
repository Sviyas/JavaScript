function myFunction(arr, e)
{
    return (e>=6)? [e,...arr] : [0,...arr];
    
}
console.log(myFunction([1,2,3], 6));
console.log(myFunction(['a','b'], 2));

//  ?? define an array with conditional statements
