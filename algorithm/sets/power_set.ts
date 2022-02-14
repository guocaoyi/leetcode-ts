/**
 * 幂集--求集合的所有子集合
 * {a, b, c}
 * 1. len = 0; {}
 * 2. len = 1; {a}, {b}, {c}
 * 3. len = 2; {a,b}, {a,c}, {b,c}
 * 4. len = 3; {a,b,c}
 * 其实就是排列组合的多阶算法
 */

/**
 * 二进制方案（bit wise solution）
 * @param set
 * {a, b, c} => 000, 001, 010, 011,... 111 ==> 1,2,3,...7  ==> 2^n
 */
export const bitwisesolution = (
  set: Set<number | string>,
): Array<Set<number | string>> => {
  const result: Array<Set<number | string>> = [];

  for (let i: number = 0; i < set.size; i++) {
    i.toString(2);
  }

  return result;
};
