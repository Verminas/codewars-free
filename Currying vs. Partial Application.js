// https://www.codewars.com/kata/53cf7e37e9876c35a60002c9/train/javascript

function curryPartial(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return (...params) => curryPartial(fn, ...args, ...params);
}
