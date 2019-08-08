/**
 * @param {number[][]} trips 行程单
 * @param {number} capacity 乘客 1~100, 上下站 0~1000, 座位 1～100000
 * @return {boolean}
 */
export const carPooling = (trips: number[][], capacity: number): boolean => {
  // 看行程上，是否有重合
  // 未重合，座席 == 单次行程最大乘客数
  // 重合，座席 == 合并乘次人数之和
  trips.sort((pre: number[], next: number[]) => pre[1] - next[1]);

  return false;
};
