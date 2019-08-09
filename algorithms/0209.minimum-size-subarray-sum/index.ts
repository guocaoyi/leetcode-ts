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
let minSubArrayLen: (s: number, nums: number[]) => number;

/**
 * Two Pointer
 * @statu Accepted
 * @runtime
 * @memory
 */
minSubArrayLen = (s: number, nums: number[]): number => {
  // 伪代码
  // prev,next
  // sum < s; next右移
  // sum > s; prev右移 -> sum < s
  let mini: number = nums.length;
  for (let prev = 0, next = 0, sum = 0; next < nums.length; ) {
    sum += nums[next++];
    if (sum >= s) {
      next - prev < mini && (mini = next - prev);
      while ((sum -= nums[prev++]) >= s) {}
    }
    console.info('---->', sum, prev, next);
  }
  return mini;
};

export default minSubArrayLen;
