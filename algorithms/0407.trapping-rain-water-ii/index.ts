/**
# 407. Trapping Rain Water II

Given an `m x n` matrix of positive integers representing the height of each unit cell in a 2D elevation map, compute the volume of water it is able to trap after raining.

## Example

  ```bash
Given the following 3x6 height map:
[
    [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]

Return 4.
```

![](./assets/rainwater_empty.png)

The above image represents the elevation map `[[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]` before the rain.

![](./assets/rainwater_fill.png)

After the rain, water is trapped between the blocks. The total volume of water trapped is *4*.

## Constraints

- 1 <= m, n <= 110
- 0 <= heightMap[i][j] <= 20000
 */
export type Solution = (heightMap: number[][]) => number;

/**
 * 
 * @param heightMap 
 */
export const trapRainWater = (heightMap: number[][]): number => {
  const result = 0;

  return result;
};
