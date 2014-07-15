describe("Sum square difference", function() {
  it("should find difference between the sum of squares and of the square of the sum of the first 10 natural numbers", function() {
    expect(calculateDifference(10)).toEqual(2640);
  });

  it("should find difference between the sum of squares and of the square of the sum of the first 100 natural numbers", function() {
    expect(calculateDifference(100)).toEqual(25164150);
  });
});
