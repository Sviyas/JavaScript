function myFunction(a,b)
{
    // return Object.entries(a).reduce((pv, cv) =>
    // ({...pv, [cv[0]]: cv[1] * b}), {});

    const value = Object.entries(a).reduce((x,y) => ({...x, [y[0]] : y[1] * b}),{});
    return value;
}
console.log(myFunction({a:1,b:2,c:3},3))