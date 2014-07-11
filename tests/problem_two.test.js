describe("Even Fibonacci numbers", function() {
  it("should calculate the sum of even numbers of the fibonacci list below 89", function() {
    expect(sum_even_fibonacci_numbers_until(89)).toEqual(44);
  });
  it("should calculate the sum of even numbers of the fibonacci list below 4000000", function() {
    expect(sum_even_fibonacci_numbers_until(4000000)).toEqual(4613732);
  });
});
