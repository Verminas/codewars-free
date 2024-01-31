/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

function likes(names) {
  let first, second, third;
  switch(true) {
      case names.length < 1: 
        return 'no one likes this';
        break;
      case names.length === 1:
        first = names[0];
        return `${first} likes this`;
        break;
      case names.length === 2:
        [first, second] = names;
        return `${first} and ${second} like this`;
        break;
      case names.length === 3:
        [first, second, third] = names;
        return `${first}, ${second} and ${third} like this`;
        break;
      case names.length > 3:
        [first, second, ...rest] = names;
        return `${first}, ${second} and ${rest.length} others like this`;
  }
}
