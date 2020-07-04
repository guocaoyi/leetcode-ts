/**
 * # 面试题 01.07. Rotate Matrix LCCI
 * 
 * Given an image represented by an N x N matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 * 
 * ## Example
 * 
 * ```bash
 * Given matrix = 
 * [
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ],
 * 
 * Rotate the matrix in place. It becomes:
 * [
 *   [7,4,1],
 *   [8,5,2],
 *   [9,6,3]
 * ]
 * ```
 * ```bash
 * Given matrix =
 * [
 *   [ 5, 1, 9,11],
 *   [ 2, 4, 8,10],
 *   [13, 3, 6, 7],
 *   [15,14,12,16]
 * ], 
 * 
 * Rotate the matrix in place. It becomes:
 * [
 *   [15,13, 2, 5],
 *   [14, 3, 4, 1],
 *   [12, 6, 8, 9],
 *   [16, 7,10,11]
 * ]
 * ```
 */
export type Solution = (matrix: number[][]) => void

/**
 * Do not return anything, modify matrix in-place instead.
 */
export const rotate = (matrix: number[][]): void => {

};