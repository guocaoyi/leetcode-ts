/**
# 485. Max Consecutive Ones

Given a binary array, find the maximum number of consecutive 1s in this array.

## Example

```bash
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```

## Note

- The input array will only contain `0` and `1`.
- The length of input array is a positive integer and will not exceed 10,000
 */
type Submission = (nums: Array<0 | 1>) => number;

/**
 * 指针
 * @time 2019.06.21
 * @status Accepted
 * @runtime 112 ms > 68.79%
 * @memory 36.6 MB < 73,78%
 */
export const findMaxConsecutiveOnes: Submission = (
  nums: Array<0 | 1>
): number => {
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
