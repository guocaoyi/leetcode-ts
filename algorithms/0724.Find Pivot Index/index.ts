/**
 * @param {number[]} nums
 *  [1, 7, 3, 6, 5, 6]
 * @return {number}
 */
var pivotIndex = (nums: Array<number>): number => {
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
  return nums.length;
};

/**
 *
 */
export function pivotIndex2(nums: Array<number>): number {
  const _len = nums.length;
  let lSum = 0; // 左和
  let rSum = 0; // 右和
  nums.map(n => (rSum += n));
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
      rSum -= nums[i + 1];
    }
    return -1;
  }
}
