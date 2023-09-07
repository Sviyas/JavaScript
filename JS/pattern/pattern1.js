const rightHandPattern = num => {
  // ? determine the , how many times need to loop
  for (let i = 0; i <= num; i++) {
    let row = '';
    // ? construct the pattern in inner loop

    for (let j = 0; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
};

// ? call the function
rightHandPattern(5);

// ? right angled number pattern

/*
0
01
012
0123
01234
 */
