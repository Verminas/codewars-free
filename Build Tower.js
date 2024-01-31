/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
  const resultArray = [];
  const item = Array(nFloors * 2 - 1).fill(' ');
  const indexStart = Math.floor(item.length / 2);
  for (let i = 0; i < nFloors; i += 1) {
    item[indexStart + i] = '*';
    item[indexStart - i] = '*';
    resultArray.push(item.join(''));
  }
  return resultArray;
}
