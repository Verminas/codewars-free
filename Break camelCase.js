/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  if (!string) return string;
  const regex = /[A-Z]/;
  const array = string.split('');
  const result = [];
  array.forEach((item, index) => {
    if (regex.test(item) && index !== 0) {
      result.push(' ');
    }
    result.push(item);
  });
  return result.join('');
}

// clever solution
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
