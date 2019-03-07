/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @time 944 ms
 * @commit 37.1 MB
 * @sort 15.75%
 * @momory https://leetcode-cn.com/submissions/detail/14087442/
 * Runtime: 460 ms, faster than 28.43% of JavaScript online submissions for Search a 2D Matrix II.
 * Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions for Search a 2D Matrix II.
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
