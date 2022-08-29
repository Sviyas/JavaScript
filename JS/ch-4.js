function myFunction(a,e) {
    return a.slice(a,e-1);
 }
 

 var result = myFunction([4,4,5,5],2);
 console.log(result);
 // remove the (e) specified amount