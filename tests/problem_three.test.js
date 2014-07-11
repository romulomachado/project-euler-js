describe("Largest prime factor", function() {
  it("should return the largest prime factor of 13195", function() {
    expect(largestPrimeFactorOf(13195)).toEqual(29);
  });

  it("should return the largest prime factor of 600851475143", function() {
    expect(largestPrimeFactorOf(600851475143)).toEqual(6857);
  });
});
