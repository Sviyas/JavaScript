function myFunction(a)
{   
    var value = a;
    return value.filter((val) => {
        return val.skill == "JavaScript";
    });
    
}
console.log(myFunction([{name: "Harry", skill: "JavaScript"},{name: "Mark", skill: "Python"},{name: "David", skill:"JavaScript"}]));
// extract : who's skill javascript and their name ;