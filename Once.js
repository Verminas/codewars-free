// https://www.codewars.com/kata/5307ff5b588fe6d7000000a5/train/javascript

function once(fn) {
  let hasBeenCalled = false;
  return function(...args) {
    if(!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    } else {
      return undefined;
    }
  }
}
