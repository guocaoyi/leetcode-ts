let searchMatrix2: any;

/**
 * 双层遍历
 * @description
 * @status accepted
 * @runtime 460ms 15.75%
 * @momery 37.1MB <100.00%
 */
searchMatrix2 = (matrix: Array<Array<number>>, target: number): boolean => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) {
        return true;
      }
    }
  }
  return false;
};
