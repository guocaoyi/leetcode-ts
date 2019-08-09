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
let pivotIndex: (nums: number[]) => number;

/**
 * @status Accepted
 * @time 2019.06.13
 * @runtime 164ms < 50.42%
 * @memory 37.5MB > 39.33%
 */
pivotIndex = (nums: number[]): number => {
  const _len: number = nums.length;
  if (_len === 0 || _len === 1) {
    return _len - 1;
  }

  let lSum = 0;
  let rSum = nums.reduce((l, r) => l + r);
  for (let i = 0; i < _len; i += 1) {
    rSum -= nums[i] || 0;
    if (lSum === rSum) {
      return i;
    }
    lSum += nums[i] || 0;
  }
  return -1;
};

export default pivotIndex;
