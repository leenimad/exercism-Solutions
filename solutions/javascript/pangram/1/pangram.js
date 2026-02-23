//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export  const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];
export const isPangram = (sentence) => {
const seenLetters = new Set();

for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i].toLowerCase();
  if (char >= 'a' && char <= 'z') {
    seenLetters.add(char);
  }
 if (seenLetters.size === 26) {
      return true;
    }
  }
  return seenLetters.size === 26;
};