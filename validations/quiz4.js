function findLongestWordLength(str) {
    const result= [];
    if(result.length===1){
      return result[0].length;
    }
      return Math.max(result[0]).length.slice(1).join(" ");
      // return Math.max(result[0].length , findLongestWordLength(result.slice(1).join(" "))
      // );
      
    }

 console.log(findLongestWordLength([" Software, developer"]));
// find the length of String