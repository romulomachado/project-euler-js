function sum_multiples_of_three_and_five(limit) {
  var sum = 0;

  for(i=0; i<limit; i++) {
    if (i % 3 == 0) {
      sum += i;
    } else if (i % 5 == 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sum_multiples_of_three_and_five(1000));
