describe('Is Palindrome', () => {
  it('should return "The input is a palindrome" for empty or null input', () => {
    expect(isPalindrome('')).toBe(true);

    expect(isPalindrome(null)).toBe(true);
  });

});