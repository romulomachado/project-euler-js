function generatePrimes(limit) {
  var primes = new Array();

  primes.push(2);

  for(i=3; i<=limit; i+=2) {
    j = 0;
    isPrime = true;
    while(primes[j] * primes[j] <= i) {
      if(i % primes[j] == 0) {
        isPrime = false;
        break;
      }
      j++;
    }

    if(isPrime) {
      primes.push(i);
    }
  }

  return primes;
}

function calculateSmallestMultipleInRangeOf(end_of_range) {
  var maximum_divisor = end_of_range, result = 1;

  list = generatePrimes(maximum_divisor);

  for(i=0; i < list.length; i++) {
    a = parseInt(Math.floor(Math.log(maximum_divisor)/Math.log(list[i])));
    result = result * (Math.pow(list[i], a));
  }

  console.log(result);
  return result;
}
