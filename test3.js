describe('Is Palindrome ', () => {
    it('should return "The input is a palindrome" for empty or null input', () => {
      expect(isPalindrome('')).toBe(true);
  
      expect(isPalindrome(null)).toBe(true);
    });
  
    it('should return "The input is a palindrome" for a single word palindrome', () => {
      expect(isPalindrome('level')).toBe(true);
    });
  
    it('should return "The input is not a palindrome" for a single word that is not a palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });
  
  });