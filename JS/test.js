

const a = ["a","b","c","d","e","d","a","b"];


const letter = new Set();

letter.add(a);

// let text = "";
// letter.forEach((fun)=>{
//     text += fun;
// })

// console.log(text);
// console.log(letter.values());4
const method = letter.entries();
let find = ""

for(const dec of method)
{
    find += dec;
}

console.log(method);
console.log(method instanceof sets);
