function sumMultiplesOfThreeAndFive(limit) {
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
