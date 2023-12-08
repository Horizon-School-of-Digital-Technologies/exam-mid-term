function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
  if (cleanedStr === cleanedStr.split('').reverse().join('')) {
    return 'is palindrome'
  } else {
    return 'is not palindrome'
  }
  }
