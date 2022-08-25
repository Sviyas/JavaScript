
function myFunction(a,b)
{
   if(typeof(a) === typeof(b))
   {
    if(a==b)
    {
        return true;
    }else{
        return false;
    }
    
   }
   return false;
}

console.log(myFunction(5,'5'));

// check comparision operator in values