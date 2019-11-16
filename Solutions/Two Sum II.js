/**
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (numbers, target) => {
  let start = 0;
  let end = numbers.length-1;
  //Sum index1 and index2 from the start and the end, working towards the middle until the value is found
  while(numbers[start] + numbers[end] !== target){
    //If the sum is too big, change index2 to be smaller else change index1 to be bigger
    if(numbers[start] + numbers[end] > target){
        end--;
    }
    else start++;
  }
  //This problem uses non-zero based indices
  return [start+1, end+1];
  
};