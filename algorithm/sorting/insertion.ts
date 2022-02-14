/**
 * 插入排序
 * @param arr Array<number | string>
 * @runtime
 * @memory
 * @type in-place
 */
export default (arr: Array<number | string>): Array<number | string> => {
  for (let i = 1, len = arr.length; i < len; i++) {
    let point = i; // i位之前均为有序数组
    while (point > 0) {
      arr[point] < arr[point - 1] &&
        ([arr[point], arr[point - 1]] = [arr[point - 1], arr[point]]);
      point--;
    }
  }
  return arr;
};
