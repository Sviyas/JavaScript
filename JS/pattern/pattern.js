const pattern = num => {
  for (let i = 0; i < num; i++) {
    let row = '';

    for (let j = 0; j < num; j++) {
      row += '*';
    }
    console.log(row);
  }
};

pattern(12);

// ? rectanglur star pattern

/* 
row  *****
row  *****
row  *****
row  *****
row  *****
 */
