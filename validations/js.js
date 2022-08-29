function myFunction(arr) {

  var value = arr.reduce((a,b) => a+b,0)/arr.length;
    return value;
}
console.log(myFunction([-50,0,50,200]));
console.log(myFunction([10,100,40]));
console.log(myFunction([10,100,1000]));
// ? find average num of array arguments 
