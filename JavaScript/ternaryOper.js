function Operator(sum)    // check sum is positive or zero or negative using ternary operator
{
    return (sum===0)? " Zero " : (sum>0) ? " Positive " : (sum<0) ? " Negative " : undefined;
}
console.log(Operator(10));
// console.log(Operator(10));
// console.log(Operator(0));