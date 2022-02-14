/**
 * 记数排序
 * @param arr Array<number | string>
 * @type
 * @runtime
 * @memory
 */
export default (arr: Array<number>): Array<number> => {
  const scala: number = 10;
  const result: Array<number> = [];
  let countor: any = new Array(scala);
  arr.forEach((v: number) => {
    countor[v] !== undefined && countor[v] > 0
      ? countor[v]++
      : (countor[v] = 1);
  });
  countor.forEach((v: number, k: number) => {
    while (v !== undefined && v > 0) {
      result.push(k);
      v--;
    }
  });
  return result;
};
