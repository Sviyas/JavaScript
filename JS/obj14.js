function myFunction(obj,ele)
{
    const {b, ...newObj} = ele;
   return {...obj, ...newObj, d : b }


}
console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));