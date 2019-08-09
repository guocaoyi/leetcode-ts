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
let arrayPairSum: (nums: number[]) => number;

/**
 * @status Accepted
 * @runtime 112ms > 88.09%
 * @memory 39MB < 58.18%
 */
arrayPairSum = (nums: number[]): number => {
  nums = nums.sort((prev: number, next: number) => prev - next);
  let result: number = 0;
  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }
  return result;
};

export default arrayPairSum;
