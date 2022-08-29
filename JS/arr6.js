function myFunction(arr)
{
    // return arr.find(function(obj) {
            return arr.sort(function(a,b) {[a.a]-b[a.a]})? 1 :-1;
            // var value = obj.sort(function(a,b) {
            //     return (a.a < b.a && b.a > b.b)? 1 : -1;
            // })
            // return value;
            // (a.a <= b.a && b.a > b.b) ? 1 : -1 ;
    // });
}

console.log(myFunction([{a:2,b:10},{a:5,b:4}]));
console.log(myFunction([{a:10,b:7},{a:2,b:1}]));
console.log(myFunction([{a:2,b:10},{a:5,b:4}]));
console.log(myFunction([{a:1,b:2},{a:5,b:4}]));

// ? sorting ascending orders in objects