function myFunction(arr)
{
    return arr.reduce((a,b) =>{
             const value = b[0].toLowerCase()
             return {...a,[value]: [...(a[value] || []),b]}
             },0)
       
    
}

console.log(myFunction(['Alf', 'Alice', 'Ben']));
console.log(myFunction(['Ant', 'Bear', 'Bird']));

// ?? group array of strings by first letter
