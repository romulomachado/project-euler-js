describe("Largest palindrome product", function() {
  it("should return true when testing 9009 as a palindrome", function() {
    number = 9009;
    expect(isPalindrome(number.toString())).toEqual(true);
  });
  it("should return true when testing 9003 as a palindrome", function() {
    number = 9003;
    expect(isPalindrome(number.toString())).toEqual(false);
  });
});
