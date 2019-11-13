/**
 * Given an array of integers, return indices of the two 
 * numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let comp = {};
    let answer = {};
    /**
    * Check if comp[x] contains a value greater than 0 first.
    * If it does exist, then comp[x] is the index of 
    * a value in nums that sums to equal target.
    *
    * Otherwise store the index (y) of the current number (x) 
    * in the (target-x)th index in comp.
    *
    * Ex. nums = [0,1,4], target = 4
    * Check if comp[0] >= 0. If true then 
    * the answer is [currentIndex (y), index of the value (target-x) in nums].
    * Otherwise store currentIndex (y) in comp[target-x] and check the 
    * next number in nums.
    */ 
    nums.map((x,y) => {
        if(comp[x] >= 0){
            answer = [y, nums.indexOf(target-x)];
        }
        comp[target-x] = y;
    });
    return answer;
};