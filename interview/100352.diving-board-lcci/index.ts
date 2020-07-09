/**
 * 面试题 16.11. Diving Board LCCI
 * 
 */
export type Solutio = (shorter: number, longer: number, k: number) => number[];

/**
 * @date 2020/07/08 08:50:00
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime 4520 ms, faster then 50.00%
 * @memory_cn 49.1 MB, less then 100.00%
 */
export const divingBoard = (
  shorter: number,
  longer: number,
  k: number,
): number[] => {
  const result: number[] = [];
  if (shorter === longer && k !== 0) return [k * shorter];
  for (let i = 0; i <= k; i++) {
    let val: number = i * shorter + (k - i) * longer;
    if (val && !result.includes(val)) {
      result.push(val);
    }
  }
  return result.sort((pre: number, next: number) => pre - next);
};

/**
 * @date 2020/07/08 08:58:00
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 184 ms, faster then 50.00%
 * @memory_cn 48.2 MB, less then 100.00%
 */
export const divingBoard$1 = (
  shorter: number,
  longer: number,
  k: number,
): number[] => {
  if (k === 0) return [];
  if (shorter === longer) return [k * shorter];

  const result: number[] = new Array(k).fill(k * shorter);
  for (let i = 1; i <= k; i++) {
    result[i] = (k - i) * shorter + i * longer;
  }
  return result;
};
