function myFunction(arr,str)
{
    return arr.map((ele) => ({...ele, continent : str }));
    
    // ?? add property in each object of arrays

}

console.log(myFunction(([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')));