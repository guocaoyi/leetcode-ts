/**
# 42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

## Example

```bash
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```
 */
export type Sulution = (height: number[]) => number;

/**
 * @date 2020/06/30 19:21:34
 * @time O(n log n)
 * @space O(1)
 * @runtime 212 ms, faster than 100.00%
 * @memory 36.7 MB, less than 100.00%
 * @runtime_cn 116 ms, faster than 40.00%
 * @memory_cn 36.3 MB, less than 100.00%
 */
export const trap = (height: number[]): number => {
  // find every element's right max highest val
  const maxHighestOfIndex: number[] = [];
  for (let i = 0; i < height.length; i++) {
    let maxHighest = 0;
    for (let j = i; j < height.length; j++) {
      maxHighest = Math.max(maxHighest, height[j]);
    }
    maxHighestOfIndex.push(maxHighest);
  }

  let rainTrapping = 0;
  for (let i = 1; i < height.length - 1; i++) {
    const minHigh = Math.min(height[i - 1], maxHighestOfIndex[i]);
    if (minHigh > height[i]) {
      const g = minHigh - height[i];
      height[i] += g;
      rainTrapping += g;
    }
  }
  return rainTrapping;
};
