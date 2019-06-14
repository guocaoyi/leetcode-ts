/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const findDiagonalOrder = (matrix: number[][]): number[] => {
  let row: number = matrix.length;
  if (row === 0) return [];

  // rows > 0
  let columns: number = matrix[0].length;
  let p: number[] = [0, 0]; //
  let direction: boolean = true; // true:向右上 false:向左下
  const result: number[] = [];

  while (!(p[0] === row && p[1] === columns)) {
    // 新注值
    result.push(matrix[p[0]][p[1]]);

    // 处理游标逻辑

    if (direction) {
      if (p[0] - 1 < 0 || p[1] + 1 >= columns) {
        // 越界
      }
      // 右上
      p[0] = p[0] - 1;
      p[1] = p[1] + 1;
    } else {
      // 左下
      p[0] = p[0] + 1;
      p[1] = p[1] - 1;
    }
  }

  return result;
};
