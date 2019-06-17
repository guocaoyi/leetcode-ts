/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const rotate = (nums: number[], k: number): void => {
  if (k === 0 || nums.length === 0) return;
  let ret: number = k % nums.length;
  if (ret === 0) return;
  for (let i = 0; i < ret; i++) {}
};
