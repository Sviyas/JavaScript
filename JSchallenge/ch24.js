function myFunction(a)
{
    var arr = a + '';
    var result = arr.split('');
    var  value  = result.map(str => Number(str));

    return value;
    
  }


console.log(myFunction([2154]));

// split the array with backwards