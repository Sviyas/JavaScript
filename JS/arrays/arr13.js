function myFunction(arr, arr1) {


  return [...new Set([...arr,...arr1])].sort((a,b) => {return a-b});  //one line statement ??
}
console.log(myFunction([1, 2, 3], [3, 4, 5]));
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
console.log(myFunction([7, 5, 4], [1, 3, 4, 2]));

/**
 * ? merge both arrays
 * ? then assign to ascending order
 */
