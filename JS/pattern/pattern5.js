/**
 * @param {number} num
 */
const pattern = num => {
  // Outer loop for constructing rows
  for (let i = 0; i < num; i++) {
    // Initialize pattern for each row
    let row = '';

    // space calculation (num - i - 1)
    for (let j = 0; j < num - i - 1; j++) {
      row += ' ';
    }

    //  star calculation (2*i+1) can get odd numbers
    for (let j = 0; j < 2 * i + 1; j++) {
      row += '*';
    }

    // space calculation
    for (let k = 0; k < num - i - 1; k++) {
      row += ' ';
    }

    // Output the row
    console.log(row);
  }
};

pattern(5);
