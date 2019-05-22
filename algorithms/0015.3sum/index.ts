/**
 * 排列组合
 * 刚拿到这题第一个想法就是使用排列组合，很快写完。结果在遇到一个长3000的数组时，运行超时了，时间复杂度O(n!)。
 * n!/m!(n-m)! 差不多就是 44.95501亿次运算循环，这不管使用何种语言都会遇到超时的问题
 * 看了几个 Submission,他们的时间复杂度能做到 O(n^2)
 * @time 2019.05.20 18:00
 * @status Time Limit Exceeded
 * @case [82597,-9243,62390,83030,-97960,-26521...] (3000)
 */
var threeSum = (nums: number[]): number[][] => {
  const result: { [T: string]: number[] } = {};
  for (let a: number = 0; a < nums.length; a++) {
    for (let b: number = a + 1; b < nums.length; b++) {
      for (let c: number = b + 1; c < nums.length; c++) {
        if (nums[a] + nums[b] + nums[c] === 0) {
          const arr: number[] = [nums[a], nums[b], nums[c]].sort();
          const arrStr: string = arr.toString();
          if (!(arrStr in result)) {
            result[arrStr] = arr;
          }
        }
      }
    }
  }
  return Object.values(result);
};

/**
 * 排列组合
 * @github https://github.com/guocaoyi/leetcode-ts
 * @author yalda
 */
var threeSum = (nums: number[]): number[][] => {
  const result: { [T: string]: number[] } = {};
  nums = nums.sort();
  let left = 0;
  let right = nums[nums.length - 1];

  for (let a: number = 0; a < nums.length; a++) {
    for (let b: number = a + 1; b < nums.length; b++) {
      for (let c: number = b + 1; c < nums.length; c++) {
        if (nums[a] + nums[b] + nums[c] === 0) {
          const arr: number[] = [nums[a], nums[b], nums[c]].sort();
          const arrStr: string = arr.toString();
          if (!(arrStr in result)) {
            result[arrStr] = arr;
          }
        }
      }
    }
  }

  return Object.values(result);
};
