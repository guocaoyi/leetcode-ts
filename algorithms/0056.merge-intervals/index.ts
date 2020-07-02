/**
# 56. Merge Intervals

Given a collection of intervals, merge all overlapping intervals.

## Example

```bash
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

```bash
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```
 */
export type Solution = (intervals: number[][]) => number[][];
export type Item = ["l" | "r", number, number];

export const merge = (intervals: number[][]): number[][] => {
  // put `a0,b0;a1,b1 ... ai,bi` insert a array && sort
  const orderedArray: Item[] = [];
  intervals.forEach((arr: number[], index: number) => {
    orderedArray.push(["l", index, arr[0]], ["r", index, arr[1]]);
  });
  const result: number[][] = [];
  const stack: number[] = [];

  orderedArray
    .sort((pre: Item, next: Item): number => pre[2] - next[2])
    .forEach((arr: Item, k: number) => {
      //
    });
  return result;
};
