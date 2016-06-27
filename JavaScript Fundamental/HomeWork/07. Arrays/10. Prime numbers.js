function PrimeNumber(input) {
  var n = +input[0], isPrime , i , j;

  for (i = n; i >= 2; i -= 1) {
    isPrime = true;
    for (j = 2; j <= Math.sqrt(n); j += 1) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime === true) {
      return i;
    }
  }
  console.log(-1);
}


console.log(PrimeNumber(['126']));