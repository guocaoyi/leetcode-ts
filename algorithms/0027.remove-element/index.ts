import { S_IFBLK } from 'constants';

/**
 * 逻辑没有考虑完备，导致很多测试用力无法通过
 * @state Error
 * @case [1],1 -> [1]
 */
export const removeElement1 = (nums: number[], val: number): number => {
  let p = nums.length - 1;
  for (let i = 0; i < p; i++) {
    if (nums[i] === val && nums[p] === val) {
      p -= 1;
    }
    if (nums[i] === val) {
      nums[i] = nums[i] ^ nums[p];
      nums[p] = nums[i] ^ nums[p];
      nums[i] = nums[i] ^ nums[p];
      p -= 1;
    }
  }
  return p + 1;
};

/**
 * @state Accepted
 * @runtime
 * @memory
 */
export const removeElement = (nums: number[], val: number): number => {
  // 伪代码
  // head === val && tail === val; while(p >= 0 && p !== val) replace;i++;p--;
  // head === val && tail !== val; replace;i++;p--;
  // head !== val && tail === val; i++;p--;
  // head !== val && tail !== val; i++;

  let p: number = nums.length - 1;
  for (let i: number = 0; i < nums.length && p >= 0; i++, i = nums.length) {
    console.info(`::for::---> i:${i}, p:${p}`);
    if (nums[i] === val) {
      while (p >= 0 && nums[p--] === val) console.info(`::while::--->${p}`);
      if (p < 0) break;
      nums[i] = nums[i] ^ nums[p];
      nums[p] = nums[i] ^ nums[p];
      nums[i] = nums[i] ^ nums[p];
      nums.length = p; // remove the filter element;change numbers[] length
    } else if (nums[p] !== val) continue;
    p--;
  }
  console.info(`::$::---->p:${p},nums:`, nums);
  return nums.length;
};
