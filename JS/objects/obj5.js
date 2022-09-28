function myFunction(obj)
{

   return {key : obj}; 

}
console.log(myFunction({a:1, b:2, c:3}));
console.log(myFunction({j:9, i:2, x:3, z:4}));
console.log(myFunction({ b: 0, a: 7, d: 8 }));
console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 }));

// ?? creating javascript objects