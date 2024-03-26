// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  let counts = {};
  let oddCountNumber = null;
  
  for (let i = 0; i < A.length; i++) {
    let element = A[i];
    
    if (counts[element]) {
      counts[element]++;
    } else {
      counts[element] = 1;
    }
  }
  
  for (let key in counts) {
    if (counts[key] % 2 !== 0) {
      oddCountNumber = parseInt(key);
      break;
    }
  }
  
  return oddCountNumber;
}
