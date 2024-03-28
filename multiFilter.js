// https://www.codewars.com/kata/56a298b27e9e994977000023/train/javascript

function multiFilter(...filters) {
  return function(element) {
    return filters.every(filter => filter(element));
  };
}
