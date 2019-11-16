/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */

//Using the XOR operator, all elements that appear twice will be changed to 0, leaving the single number behind
const singleNumber = (nums) => {
  return nums.reduce((x,y) => x ^ y, 0)
};