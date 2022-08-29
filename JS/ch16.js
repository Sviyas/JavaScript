

function myFunction(a)
{
  var value =   Number(a);
    if(value===a && a%1===0)
    {
        return true;
    }
    else{
        return false;
    }   
}

console.log(myFunction(5.454));
console.log(myFunction(4));

// ?? check wheather is number or decimal 