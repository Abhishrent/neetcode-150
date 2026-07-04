/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    let answer: number[] = new Array(nums.length).fill(1);
    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return answer;
};
// @lc code=end

