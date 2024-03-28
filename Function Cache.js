// https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript

function cache(func) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    const result = func(...args);
    cache[key] = result;

    return result;
  };
}
