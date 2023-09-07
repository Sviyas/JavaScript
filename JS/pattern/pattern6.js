// ? Inverted Right Pyramid
/**
 *
 * @param {number} num
 */
const pattern = num => {
  // ? outer looop construct
  for (let i = 0; i < num; i++) {
    // ? initialize pattern
    let pattern = '';
    for (let j = 1; j < num - i + 1; j++) {
      // ? construct pattern design
      pattern += j;
    }
    console.log(pattern);
  }
};

// ? input
pattern(5);
pattern(3);

// ? output

/*
12345
1234
123
12
1
 */
