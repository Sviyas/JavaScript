var user = [
  { name: 'jayanth', age: 23, sex: 'male' },
  { name: 'jayanth', age: 23, sex: 'male' },
  { name: 'santhi', age: 23, sex: 'female' },
  { name: 'santhi', age: 23, sex: 'female' },
  { name: 'manjoj', age: 21, sex: 'male' }
];

function uniqueValues(data, key) {
  return [...new Map(data.map(a => [key(a), a])).values()];
}

console.log(JSON.stringify(uniqueValues(user, ind => ind.name)));
