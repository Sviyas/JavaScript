function myFunction(obj)
{
    const {fn,ln,size,weight, ...rest} = obj; 
    const  newObj = {fn,ln};
    if(size) newObj.size = `${size} cm`;
    if(weight) newObj.weight = `${weight} kg`
    return newObj;
}
console.log(myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
console.log(myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}));
console.log(myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
console.log(myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));