// https://www.codewars.com/kata/53d40c1e2f13e331fc000c26/train/javascript

function fib(n) {
  if(n === 0) {
    return 0n;
  } else {
    if(n === 1) {
      return 1n;
    } else {
      if(n > 0) {
        return fib(n - 2) + fib(n - 1);
      } else {
        return fib(n + 2) - fib(n + 1);
      }
    }
  }
}
