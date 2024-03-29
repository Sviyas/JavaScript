/* 
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/
function largestPrimeFactor(number) {
  let prime = 2,
    max = 1;
  while (prime <= number) {
    if (number % prime == 0) {
      max = prime;
      number = number / prime;
    } else prime++; //Only increment the prime number if the number isn't divisible by it
  }
  return max;
}

console.log(largestPrimeFactor(13195));
