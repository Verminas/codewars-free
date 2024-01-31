/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  let resultArray = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordResult = [];
    for (let j = 0; j < word.length; j++) {
      const letter = word[j].toLowerCase();
      if (!vowels.includes(letter)) {
        wordResult.push(word[j]);
      }
    }
    resultArray.push(wordResult.join(''));
  }
  return resultArray.join(' ');
}
