// https://www.codewars.com/kata/5b773b698adeaeb6b80000df/train/javascript

function memo(fn) {
  const cache = new Map();

  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }

    const result = fn(arg);
    cache.set(arg, result);

    return result;
  };
}
