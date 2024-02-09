/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
  const regex = /[^a-zA-Z]/;
  const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
  const words = text.toLowerCase().split(' ');
  const result = words.map(word => {
    const positions = [];
    for (let item of word) {
      if (!regex.test(item)) {
        const position = alphabet.findIndex((letter) => item === letter);
        if (position !== -1) {
          positions.push(position + 1);
        }
      }
    }
    return positions.join(' ');
  });
  return result.filter(Boolean).join(' ');
}
