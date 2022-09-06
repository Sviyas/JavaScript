function myFunction(obj)
{
    return obj["prop-2"]
}
console.log(myFunction({  one: 1,  'prop-2': 2}));
console.log(myFunction({  'prop-2': 'two',  prop: 'test'}));

// Accessing object properties two??