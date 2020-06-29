/**
 * # 17. Letter Combinations of a Phone Number
 *
 * Given a string containing digits from 2-9 inclusive,
 * return all possible letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons)
 * is given below. Note that 1 does not map to any letters.
 *
 * ![Telephone Keypad](../../assets/images/Telephone-keypad2.svg.png)
 *
 * ## Example
 *
 * ```bash
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * ```
 *
 * ## Note
 *
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 *
 * ## Thinking
 *
 * 笛卡尔积有很多应用场景：
 *
 * 1. 输入法简拼，快捷打字
 * 2. 电商规格项规格值算 SKU
 * 3. 商品详情页面下单时勾选规格值，根据 SKU 库存排除无货的规格值可选
 * 4. 电商营销场景组合优惠券场景
 */
export type Solution = (digits: string) => string[];

/**
 * 笛卡尔积
 * @author yalda
 * @github https://github.com/guocaoyi/leetcode-ts
 * @time 2020.06.28 12:10
 * @runtime 100 ms, faster then 100.00%
 * @memory 33.1 Mb, less then 100.00%
 * @runtime_cn 72 ms, faster then 31.25%
 * @memory_cn 32.4 MB, less then 100.00%
 */
export const letterCombinations = (digits: string): string[] => {
  if (digits === "") {
    return [];
  }
  // 拨号键盘
  const keymap: any = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const s = digits.split("").map((d) => keymap[d]);
  let result: any[] = [];
  let stack: any[] = [];
  let point = 0;

  const loop = () => {
    for (let i = 0, array = s[point++]; i < array.length; i++) {
      stack.push(array[i]);
      if (point == digits.length) {
        result.push(stack.join(""));
      } else {
        loop();
        point--;
      }
      stack.pop();
    }
  };
  loop();
  return result;
};
