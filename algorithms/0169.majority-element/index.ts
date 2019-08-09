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
let majorityElement: (nums: number[]) => number;

/**
 * 通用解法
 * @status Accepted
 * @time 2019.03.01
 * @runtime 68ms | 87.42%
 * @memory 37.2MB | 88.35%
 */
majorityElement = (nums: number[]): number => {
  let map: any = {};
  nums.forEach(n => {
    if (n in map) {
      map[n]++;
    } else {
      map[n] = 1;
    }
  });
  let maximum = 0;
  let maxKey: any;

  for (let k in map) {
    if (map[k] >= maximum) {
      maximum = map[k];
      maxKey = k;
    }
  }
  return maxKey;
};

export default majorityElement;
