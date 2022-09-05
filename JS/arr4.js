function myFunction(arr,n)
{
            var a = 0,
            b = 0,
            c = 0,
            n1 = 0,
            n2 = c.length, 
            n3 = false, 
            result = false; 

        while(a < n2){
            b = a + 1; 
            
            if(b < n2){
                for(c = b; c < n2; c++){
                    
                    if(arr[a] < arr[c]){
                        n1 = arr[c];
                        arr[c] = arr[a];
                        arr[a] = n1;
                        n3 = true; 
                    }else{
                        continue;
                    }	
                }					
            }
            
            if(n3){
                n3 = false;
            }else{
                a++; 
                if(a === n){ 
                  
                    result = true;
                }	
            }
            if(result){
                break;
            }
        }

return arr[(n - 2)];	
 
 }
console.log(myFunction([8,7,2,3],2));

// ?? find the nth element of arrab values