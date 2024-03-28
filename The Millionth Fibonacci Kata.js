// https://www.codewars.com/kata/53d40c1e2f13e331fc000c26/train/javascript

// it doesn't work with large numbers (mln and other)
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

// it is right variant with matrix exponentiation

function multiplyMatrix(matrix1, matrix2) {
  const result = [[0n, 0n], [0n, 0n]];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}

function powerMatrix(matrix, n) {
  if (n === 0n) {
    return [[1n, 0n], [0n, 1n]];
  } else if (n === 1n) {
    return matrix;
  } else if (n % 2n === 0n) {
    const halfPower = powerMatrix(matrix, n / 2n);
    return multiplyMatrix(halfPower, halfPower);
  } else {
    const halfPower = powerMatrix(matrix, (n - 1n) / 2n);
    const multipliedMatrix = multiplyMatrix(halfPower, halfPower);
    return multiplyMatrix(matrix, multipliedMatrix);
  }
}

function fib(n) {
  if (n === 0) {
    return 0n;
  } else if (n === 1n || n === -1n) {
    return 1n;
  } else {
    const sign = n < 0 && n % 2 === 0 ? -1n : 1n;
    const indexNum = BigInt(Math.abs(n));
    const matrix = [[1n, 1n], [1n, 0n]];
    const poweredMatrix = powerMatrix(matrix, indexNum - 1n);
     return sign * poweredMatrix[0][0]; 
    }
  }
