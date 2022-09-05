function myFunction(obj,val)
{
   let x = {}
   let index = 0;
   for(let i of obj)
   {
    x[i] = val[index]
    index++
   }
   return x;

//    return Object.fromEntries(a.map((obj,val) => [obj,val[b]])); in line code 
}
console.log(myFunction(['a','b','c'],[1,2,3]));
console.log(myFunction(['w','x','y','z'],[10,9,5,2]));
console.log(myFunction([1,'b'],['a',2]));

// ?? write javascript object three?
 