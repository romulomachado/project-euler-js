function calculateDifference(range) {
  var sum_of_squares = 0, square_of_sum = 0;

  for(i=1; i<=range; i++) {
    sum_of_squares += Math.pow(i, 2);
    square_of_sum += i;
  }

  square_of_sum = Math.pow(square_of_sum, 2);

  return square_of_sum - sum_of_squares;
}

calculateDifference(100);
