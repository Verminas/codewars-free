// https://www.codewars.com/kata/53ad69892a27079b34000bd9/train/javascript

Ackermann = function(m,n) {
  if(!Number.isInteger(m) || !Number.isInteger(n)) {
    return null;
  } else {
    if(m === 0) {
      return n + 1;
    } else if(m > 0 && n === 0) {
      return Ackermann(m - 1, 1);
    } else if(m > 0 && n > 0) {
      return Ackermann(m - 1, Ackermann(m, n - 1));
    }
  }
}
