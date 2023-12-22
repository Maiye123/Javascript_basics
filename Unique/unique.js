function sumEvenNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
      if (typeof number === 'number' && number % 2 === 0) {
        sum += number;
      }
    }
    return sum;
  }
  
  // Sample:
  const numbersArray = [2, 5, 8, 10, 15];
  const result = sumEvenNumbers(numbersArray);
  console.log(result);