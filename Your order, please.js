// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words){
    if(!words.length) {
        return '';
    } else {
        const regExp = /[1-9]/g;
        const resultArray = [];
        resultArray.length = words.split(' ').length;
        for (let word of words.split(' ')) {
            let digit = parseInt(word.match(regExp)) - 1;
            resultArray[digit] = word;
        }
        return resultArray.join(' ');
    }
}
