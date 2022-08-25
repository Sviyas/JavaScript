function myFunction(a)
{
   if(a === 1 || a === 2) return true;
   else if(a) {
        for(var i =2 ; i < a; i++)
        {
            if(a % i  !== 0)
            {
               return true;
            }
            else if(a === i * i)
            {
                return false;
            }
            return false;
        }
    }
    else{
        return false;
    }
}
console.log(myFunction(38));


