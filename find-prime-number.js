function findNearestPrime(number) {
  let lowerNumber = number - 1;
  let higherNumber = number + 1;

  while (true) {
    if (isPrime(lowerNumber)) return lowerNumber;
    if (isPrime(higherNumber)) return higherNumber;

    lowerNumber--;
    higherNumber++;
  }
}

function findPrimeNumbersSum(number) {
  let lowerNumber = number - 1;
  let higherNumber = number + 1;

  while (!isPrime(lowerNumber)) {
    lowerNumber--;
  }

  while (!isPrime(higherNumber)) {
    higherNumber++;
  }

  return lowerNumber + higherNumber;
}

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(findNearestPrime(100)); // Output: 101
console.log(findPrimeNumbersSum(100)); // Output: 198 (97 + 101)
console.log(findNearestPrime(50));
console.log(findPrimeNumbersSum(50)); 
console.log(findNearestPrime(107));
console.log(findPrimeNumbersSum(107));
