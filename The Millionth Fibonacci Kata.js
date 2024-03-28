// https://www.codewars.com/kata/53d40c1e2f13e331fc000c26/train/javascript

function fib(n) {
  if (n === 0) {
    return 0n;
  } else if (n === 1 || n === -1) {
    return 1n;
  } else {
    const indexNum = Math.abs(n);
    let num1 = 0n;
    let num2 = 1n;
    let fibNum;

    for (let index = 1; index < indexNum; index += 1) {
      fibNum = num1 + num2;
      num1 = num2;
      num2 = fibNum;
    }

    if (n < 0 && n % 2 === 0) {
      fibNum = -fibNum;
    }
    return fibNum;
  }
}
