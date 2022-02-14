/**
 * 选择排序（out-place）
 * @param arr Array<number | string>
 * @order asc
 * @runtime O(n²)
 * @memory O(n)
 */
export default (arr: Array<number | string>): Array<number | string> => {
  for (let i = 0; i < arr.length; i++) {
    let minValue = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= minValue) {
        minIndex = j;
        minValue = arr[j];
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

/**
 * 选择排序（in-place）
 * @param arr number[]
 * @order asc
 * @runtime O(n²)
 * @memory O(1)
 */
export const selection = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let minValue = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= minValue) {
        minIndex = j;
        minValue = arr[j];
      }
    }
    arr[i] ^= arr[minIndex];
    arr[minIndex] ^= arr[i];
    arr[i] ^= arr[minIndex];
  }
  return arr;
};
