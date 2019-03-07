/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @time 108 ms
 * @memory 35 MB
 * @sort 20.18%
 * @commit https://leetcode-cn.com/problems/search-a-2d-matrix/submissions/
 * 
 * Runtime: 64 ms, faster than 64.69% of JavaScript online submissions for Search a 2D Matrix.
 * Memory Usage: 35.4 MB, less than 7.41% of JavaScript online submissions for Search a 2D Matrix.
 *
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
