function nextChar(str) {
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt() + 1));
  return correctedArray.join('');
}

console.log(nextChar('bnchmf'));

// this program has return next string word
/// as we pass arguments linke : bnchmf => coding
