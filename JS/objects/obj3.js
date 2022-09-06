function myFunction(index,value)
{
    // const check = {
    //     [index] : value
    // }
    // return check;
    return {[index] : value}  // one line compile
}
console.log(myFunction('a','b'));
console.log(myFunction('z','x'));
// console.log();

// ?? create object and print the values