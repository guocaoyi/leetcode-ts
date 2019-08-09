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
let findMaxConsecutiveOnes: (nums: Array<0 | 1>) => number;

/**
 * @status Accepted
 * @runtime 112ms > 68.79%
 * @memory 36.6MB < 73,78%
 */
findMaxConsecutiveOnes = (nums: Array<0 | 1>): number => {
  let maxLength: number = 0;
  let curLength: number = 0;
  nums.forEach((v: 0 | 1) => {
    if (v === 1) {
      curLength++ >= maxLength && (maxLength = curLength);
    } else {
      curLength = 0;
    }
  });
  return maxLength;
};

export default findMaxConsecutiveOnes;
