/**
 * 冒泡排序
 * @type out-place
 * @param arr Array<number | string>
 * @order asc
 * @runtime O(n²)
 * @memory O(n)
 */
export default (arr: Array<number | string>): Array<number | string> => {
  // 遍历 & 对比 & 换值
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

/**
 * 冒泡排序
 * @type in-place
 * @param arr Array<number>
 * @order asc
 * @runtime O(n²)
 * @memory O(1)
 */
export const bubble: any = (arr: Array<number>): Array<number> => {
  // 遍历 & 对比 & 换值
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // in place 无法解决字符串换值，且会产生因精度而引发一些错误
        arr[j] ^= arr[j + 1];
        arr[j + 1] ^= arr[j];
        arr[j] ^= arr[j + 1];
      }
    }
  }
  return arr;
};
