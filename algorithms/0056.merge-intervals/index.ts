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
export type Solution = (intervals: number[][]) => number[][]
export type Item = ['l' | 'r', number, number]

export const merge = (intervals: number[][]): number[][] => {
  // put `a0,b0;a1,b1 ... ai,bi` insert a array && sort
  // iterator
  const orderedArray: Item[] = []
  intervals.forEach((arr: number[], k: number) => {
    orderedArray.push(['l', k, arr[0]], ['r', k, arr[1]])
  })
  const result: number[][] = []
  let li: number = NaN
  const set: number[] = []
  let stack = []

  orderedArray
    .sort((pre: Item, next: Item): number => pre[2] - next[2])
    .forEach((arr: Item, k: number) => {
      console.info('==>', li, arr, set)
      if (isNaN(li) && arr[0] === 'l') {
        li = arr[1]
        set.push(li)
      }
      if (li === arr[1] && arr[0] === 'r') {
        // li == arr.index && arr.type == r 收敛  
        set.push(li)
        li = NaN
      }
    })

  return result
};

console.info(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))