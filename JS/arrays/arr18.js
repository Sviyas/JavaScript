function myFunction(ar,ele)
{
   return ar.reduce((a,b)=> {
    if(ele<a) return a + b;
    return a;
   },0)
}
console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2));
console.log(myFunction([-10, -11, -3, 1, -4], -3));
console.log(myFunction([78, 99, 100, 101, 401], 99));
console.log(myFunction([7,5,7,-2,1,6,3,8,2],2));

// ?? sum of all the numbers , 
// with values greater than element ?
