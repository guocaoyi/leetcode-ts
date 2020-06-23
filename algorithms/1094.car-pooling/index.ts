/**
# 1094. Car Pooling

You are driving a vehicle that has `capacity` empty seats initially available for passengers. The vehicle **only** drives east (ie. it **cannot** turn around and drive west.)

Given a list of `trips, trip[i] = [num_passengers, start_location, end_location]` contains information about the `i-th` trip: the number of passengers that must be picked up, and the locations to pick them up and drop them off. The locations are given as the number of kilometers due east from your vehicle's initial location.

Return `true` if and only if it is possible to pick up and drop off all passengers for all the given trips.

## Example

```bash
Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false
```

```bash
Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true
```

```bash
Input: trips = [[2,1,5],[3,5,7]], capacity = 3
Output: true
```

```bash
Input: trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11
Output: true
```

## Constrains

1. `trips.length <= 1000`
2. `trips[i].length == 3`
3. `1 <= trips[i][0] <= 100`
4. `0 <= trips[i][1] < trips[i][2] <= 100`
5. `1 <= capacity <= 100000`
 */
type Submission = (trips: number[][], capacity: number) => Boolean

/**
 * 贪心算法
 */
export const carPooling: Submission = (
  trips: number[][],
  capacity: number
): boolean => {
  // 看行程上，是否有重合
  // 未重合，座席 == 单次行程最大乘客数
  // 重合，座席 == 合并乘次人数之和
  trips.sort((pre: number[], next: number[]) => pre[1] - next[1])
  return false
}
