//Q-check word
// We define the usage of capitals in a word to be right when one of the following cases holds:
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

function checkWord(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else if (word === word.toLowerCase()) {
    return true;
  } else if (
    word ===
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkWord("MahesH"));
