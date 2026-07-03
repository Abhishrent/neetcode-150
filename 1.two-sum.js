/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const myMap = new Map()
    for(let i = 0; i < nums.length; i++) {
        const partnerNum = target - nums[i]
        if(myMap.has(partnerNum)){
            return [myMap.get(partnerNum), i]
        } else {
            myMap.set(nums[i], i)
        }
    }
}; 
// @lc code=end

