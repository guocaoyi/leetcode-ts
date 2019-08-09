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
let findDiagonalOrder: (matrix: number[][]) => number[];

/**
 */
findDiagonalOrder = (matrix: number[][]): number[] => {
  const row: number = matrix.length;
  const result: number[] = [];
  if (row === 0) {
    return result;
  }

  // rows > 0
  let columns: number = matrix[0].length;
  let p: number[] = [0, 0]; //
  let direction: boolean = true; // true:x向右上 false:向左下

  while (!(p[0] === row && p[1] === columns)) {
    // 新注值
    result.push(matrix[p[0]][p[1]]);

    // 处理游标逻辑
    if (direction) {
      // 右上
      if (p[0] - 1 < 0 || p[1] + 1 >= columns) {
        // 越界
      }
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

export default findDiagonalOrder;
