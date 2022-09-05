function myFunction(obj)
{
   const objFind = {...obj};
   for(key in objFind)
   {
     if(objFind[key].trim()==="") {
        objFind[key] = null
     }
   }
   return objFind;
}

console.log(myFunction({ a: "a", b: "b", c: "" }));

//  replace empty string objects with null values