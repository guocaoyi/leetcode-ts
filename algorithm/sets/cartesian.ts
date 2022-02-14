/**
 * 笛卡尔积
 * {1, 2} X {3, 4} => [{1, 3}, {1, 4}, {2, 3}, {2, 4}]
 * @param set Set<number>
 * @runtime O(k*n)
 * @memory O(1)
 */
export const cartesian = (
  set: [Set<number>, Set<number>],
): Array<Set<number>> => {
  const result: Array<Set<number>> = [];
  let [ls, rs] = set;
  ls.forEach((v: number) => {
    rs.forEach((vi: number) => {
      result.push(new Set([v, vi]));
    });
  });
  return result;
};

/**
 * 笛卡尔积（集合个数不确定）
 * {1, 2} X {3, 4} X ... X {8, 9} => [{1, 3, ..., 8}, {1, 3, ..., 9}, {1, 4, ..., 8}, ...]
 * @param sets Array<Set<number>>
 * @runtime O(n²)
 * @memory O(1)
 */
export const multi_cartesian = (
  ...sets: Array<Set<number>>
): Array<Set<number>> => {
  const result: Array<Set<number>> = [];

  let loop = (set: Set<number>, items: number[], point: number): void => {
    set.forEach((v: number) => {
      items.push(v);
      if (point >= sets.length - 1) {
        result.push(new Set(items));
      } else {
        set = sets[point + 1];
        loop(set, items, point + 1);
      }
      items.pop();
    });
  };

  loop(sets[0], [], 0);
  return result;
};
