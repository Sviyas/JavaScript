// ? star pattern

const star = num => {
  for (let i = 0; i < num; i++) {
    let row = '';
    // ? pattern construct on inner loop
    for (let j = 0; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
};

star(5);

// ? right angled star pattern
/*
 *
 **
 ***
 ****
 *****
 */
