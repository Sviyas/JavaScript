function myFunction(a,b)
{
   

    const value = Object.entries(a).reduce((x,y) => ({...x, [y[0]] : y[1] * b}),{});
    return value;
}
console.log(myFunction({a:1,b:2,c:3},3))