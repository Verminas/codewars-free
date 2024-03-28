// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n) {
  let divisor = 1;
  let count = 0;
  
  while (divisor * divisor <= n) {
    if (n % divisor === 0) {
      if (divisor * divisor === n) {
        count += 1;
      } else {
        count += 2;
      }
    }
    divisor += 1;
  }
  
  return count;
}
