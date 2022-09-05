function myFunction(obj, key)
{
        return obj[key]
}

console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'));
console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country'));
// accessing object values 