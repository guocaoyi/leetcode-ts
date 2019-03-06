/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @time 108 ms
 * @memory 35 MB
 * @sort 20.18%
 * @commit https://leetcode-cn.com/problems/search-a-2d-matrix/submissions/
 */
var searchMatrix = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) {
        //
        return true;
      }
    }
  }
  return false;
};
