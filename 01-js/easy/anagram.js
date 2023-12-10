/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*
function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  if (str1.toLowerCase().split('').sort().join('') == str2.toLowerCase().split('').sort().join('')) return true;
  else return false;
}
*/
function isAnagram(str1, str2) {
  // First, check if the lengths of the strings are equal.
  // If not, they cannot be anagrams.
  if (str1.length !== str2.length) return false;

  // Create an object to keep track of the character count.
  const charCount = {};

  // Iterate over the first string.
  // Convert each character to lowercase (to ensure case-insensitivity).
  // If the character is not in charCount, initialize it with 1.
  // If it already exists, increment its count.
  for (let char of str1.toLowerCase()) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Now, iterate over the second string in a similar manner.
  for (let char of str2.toLowerCase()) {
    // If the character is not found in charCount or its count is zero,
    // it means the second string has an extra character or more instances of a character.
    // Therefore, the strings cannot be anagrams.
    if (!charCount[char]) return false;

    // If the character is found, decrement its count.
    // This is to match the number of occurrences in both strings.
    charCount[char]--;
  }

  // If all characters match in the count and number of occurrences,
  // then the function will reach this point and return true.
  // This means the strings are anagrams of each other.
  return true;
}

module.exports = isAnagram;
