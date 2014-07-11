describe("Multiples of 3 and 5", function() {
  it("should calculate the sum of the multiples of 3 and 5 below 10", function() {
    expect(sumMultiplesOfThreeAndFive(10)).toEqual(23);
  });

  it("should calculate the sum of the multiples of 3 and 5 below 1000", function() {
    expect(sumMultiplesOfThreeAndFive(1000)).toEqual(233168);
  });
});
