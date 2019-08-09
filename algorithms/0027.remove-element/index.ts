`
0. \*\*

\*\*\*

"""
\*\*\*
"""

::: \*\*
### \*\*
>>> \*\*
`;
let removeElement: (nums: number[], val: number) => number;

/**
 * 逻辑没有考虑完备，导致很多测试用力无法通过
 * @status Error
 * @case [1],1 -> [1]
 */
removeElement = (nums: number[], val: number): number => {
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
 * 尾部判定
 * @status Accepted
 * @runtime 112ms > 28.81%
 * @memory 33.8MB < 30.90%
 */
removeElement = (nums: number[], val: number): number => {
  for (let p: number = 0; p < nums.length; p++) {
    while (nums[nums.length - 1] === val) {
      nums.length--;
    }
    if (p >= nums.length - 1) {
      break;
    }
    nums[p] = nums[p] ^ nums[nums.length - 1];
    nums[nums.length - 1] = nums[nums.length - 1] ^ nums[p];
    nums[p] = nums[p] ^ nums[nums.length - 1];
  }
  return nums.length;
};
