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
    for (let j = num; j > i; j--) {
      // ? construct pattern design
      pattern += '*';
    }
    console.log(pattern);
  }
};

// ? input
pattern(5);

// ? output

/*
 * * *
 * *
 *
 */
