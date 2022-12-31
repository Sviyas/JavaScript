import ps from 'prompt-sync';
const prompt = ps();

function myFunction(que) {
  que = prompt(`enter the input : `);

for(que=1; que <=100; que++)
  {
      const x = prompt('enter the v1 :');
      const y = prompt('enter the v2 : ')
      const result = x < y ? 'First' : x == y ? 'ANY' : 'SECOND';
      return result;
    }
  }
console.log(myFunction());
