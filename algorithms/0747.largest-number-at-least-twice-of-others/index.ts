/**
 * @param {number[]} nums
 * @return {number}
 * @date 2019.06.13
 */
export const dominantIndex = (nums: number[]): number => {
  if (nums.length === 1) return 0;

  // len > 2
  let queue: number[][] = [[0, 0], [0, 0]];
  nums.forEach((v: number, k: number) => {
    if (v > queue[0][1]) {
      queue.pop();
      queue = [[k, v]].concat(queue);
    } else if (v > queue[1][1]) {
      queue.pop();
      queue = queue.concat([[k, v]]);
    }
  });

  if (queue[0][1] >= 2 * queue[1][1]) return queue[0][0];
  return -1;
};
