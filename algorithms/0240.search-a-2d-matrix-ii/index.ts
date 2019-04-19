/**
 * 双层遍历
 * @status Accepted
 * @runtime 460ms > 15.75%
 * @momery 37.1mb < 100.00%
 */
var searchMatrix = (matrix: number[][], target: number): boolean => {
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};
