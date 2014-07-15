describe("Smallest multiple", function() {
  it("should return 2520 when the range is 1..10", function() {
    expect(calculateSmallestMultipleInRangeOf(10)).toEqual(2520);
  });

  it("should return 232792560 when the range is 1..20", function() {
    expect(calculateSmallestMultipleInRangeOf(20)).toEqual(232792560);
  });
});
