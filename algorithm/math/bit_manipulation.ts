/**
 * 左移
 * 10 << 1 --> 1010 << 1 --> 10100 --> 20
 */
export const leftShift = (num: number): number => {
  return num << 1;
};

/**
 * 右移
 * 10 -> 1010 >>1 -> 101 -> 5
 */
export const rightShift = (num: number): number => {
  return num >> 1;
};

/**
 * 无负号右移
 */
export const noRightShift = (num: number): number => {
  return num >>> 1;
};

/**
 * 按位与
 * 8 & 5 --> 1000 & 101 --> 0000 --> 0
 */
export const and = (l: number, r: number): number => {
  return l & r;
};

/**
 * 按位或
 * 8 | 5 --> 1000 | 101 --> 1101 --> 13
 */
export const or = (l: number, r: number): number => {
  return l | r;
};

/**
 * 按位异或
 * 8 ^ 5 --> 1000 ^ 101 --> 1101 --> 13
 */
export const eor = (l: number, r: number): number => {
  let num: number = l ^ r;
  return num;
};

/**
 * 取反
 * ~8 --> ~01000 --> 01111 --> -9
 */
export const d = (num: number): number => {
  return ~num;
};
