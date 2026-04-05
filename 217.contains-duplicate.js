/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

//first brute force attempt, exceeds time limit
// var containsDuplicate = function(nums) {
//     for(num of nums){
//         if(nums.indexOf(num) != nums.lastIndexOf(num)){
//             return true
//         }
//     }
//     return false
// };

//second attempt, still exceed the time limit
// var containsDuplicate = function(nums) {
//     nums.sort((a, b) => a-b)
//     for(let i = 0; i<nums.length; i++){
//         if(nums[i] === nums[i+1]){
//             return true
//         }
//     }
//     return false
// };

//third attempt, O(1) time complexity
var containsDuplicate = function(nums) {
    const trackerSet = new Set()
    for(num of nums){
        if(trackerSet.has(num)){
            return true
        }
        trackerSet.add(num)
    }
    return false
};

// @lc code=end

