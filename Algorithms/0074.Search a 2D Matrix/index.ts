/**
 * Runtime: 64 ms, faster than 64.69% of JavaScript online submissions for Search a 2D Matrix.
 * Memory Usage: 35.4 MB, less than 7.41% of JavaScript online submissions for Search a 2D Matrix.
 * @memory 35.4MB
 * @runtime 64ms
 *
 */
const searchMatrix = (
  matrix: Array<Array<number>>,
  target: number
): boolean => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) {
        return true;
      }
    }
  }
  return false;
};
