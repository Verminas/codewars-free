// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/javascript

function makeLooper(str) {
    let index = -1;
    const lastIndex = str.length - 1;
    return function() {
        if( index !== lastIndex) {
            index += 1;
        } else {
            index = 0;
        }
        return str[index];
    }
}
