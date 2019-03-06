/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @time 944 ms
 * @commit 37.1 MB
 * @sort 15.75%
 * @momory https://leetcode-cn.com/submissions/detail/14087442/
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
