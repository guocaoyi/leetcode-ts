/**
 * 
 * Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

Example 1:
Input: 
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation: 
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.
Example 2:
Input: 
nums = [1, 2, 3]
Output: -1
Explanation: 
There is no index that satisfies the conditions in the problem statement.
Note:

The length of nums will be in the range [0, 10000].
Each element nums[i] will be an integer in the range [-1000, 1000].
 */

/**
 * @param {number[]} nums
 *  [1, 7, 3, 6, 5, 6]   
 * @return {number}
 *
 */
var pivotIndex = function (nums) {
  // nums.length >= 3,否则返回0

  // initial
  let lPointer = 1; // 左标
  let lSum = nums[0]; // 左和 
  let rPointer = 2; // 右标
  let rSum = nums[2]; // 右和

  // step1：左和<右和
  //    step1-0：左标遍历，左和+左标值，右和-左标值
  // step2：左和=右和
  //    step2-0：右标达到数组长度，return -1
  //    step2-1：右标未达到数组长度，左标遍历，左和+左标值，右和-左标值
  // step3：左和>右和
  //    step3-0：右标达到数组长度；return -1
  //    step3-1：右标未达到数组长度,右标继续遍历


};


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const _len = nums.length;
  let lSum = 0; // 左和 
  let rSum = 0; // 右和
  nums.map(n => rSum += n);
  if (_len === 0) {
    return -1;
  } else {
    for (let i = 0; i < _len; i++) {
      if (lSum === rSum && i == _len - 1) {
        return i;
      } else if (i == _len - 1) {
        return -1;
      }
      lSum += nums[i];
      rSum -= nums[i+1];
    }
    return -1;
  }
};