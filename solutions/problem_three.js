function largest_prime_factor_of(number) {
  var i = 2;

  while (i <= number) {
    if (number % i == 0) {
      number /= i;
    }
    else {
      i++;
    }
  }

  return i;
}
