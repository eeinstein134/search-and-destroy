'use strict';

// Complete this algo
const minJumps = arr => {
    let current = 0;
    let counter = 0;

    while (arr[current] < arr.length - arr[current]) {
        let newArr = arr.slice(current + 1, current + 1 + arr[current]);
        let jumpArr = newArr.map((element,idx) => element + idx);
        let win = Math.max(...jumpArr);
        current += jumpArr.indexOf(win) + 1;
        counter++;
    }
    return counter + 1;
};

module.exports = minJumps