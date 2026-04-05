/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// var isAnagram = function(s, t) {
//     const sSorted = [...s].sort().join('')
//     const tSorted = [...t].sort().join('')
//     return (sSorted === tSorted)
// };

const stringCounter = (str, arr, isFirst) => {
    const delta = isFirst ? 1: -1
    for(let char of str){
        const index = char.charCodeAt(0) - 97
        if(index >= 0 && index <26) {
            arr[index] += delta;
        }
    }
    return arr
}

var isAnagram = function(s, t) {
    const arr = new Array(26).fill(0)
    stringCounter(s, arr, true);
    stringCounter(t, arr, false);
    return arr.every(val => val === 0)
};
// @lc code=end

