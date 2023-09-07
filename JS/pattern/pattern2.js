// ? Right angled number pyramind - II

const pattern = num => {
  // ? outer looop construct

  for (let i = 0; i <= num; i++) {
    // ? initialize pattern
    let pattern = '';

    for (let j = 0; j <= i; j++) {
      // ? construct pattern design
      pattern += i;

      //   console.log('i', i);
    }
    console.log(pattern);
  }
};

// ? input
pattern(5);

// ? output

/* 
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6
*/
