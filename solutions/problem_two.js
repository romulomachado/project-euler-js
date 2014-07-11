function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

function sum_even_fibonacci_numbers_until(limit) {
  var i = 1,
      list = [],
      sum = 0;

  while(fibonacci(i) <= limit) {
    list.push(fibonacci(i));
    i++;
  }

  for(index=0; index <= list.length; index++) {
    if (list[index] % 2 == 0) {
      sum += list[index];
    }
  }

  return sum;
}
