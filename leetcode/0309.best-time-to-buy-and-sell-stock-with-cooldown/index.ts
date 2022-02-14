/**
 * # 309. Best Time to Buy and Sell Stock with Cooldown
 *
 * Say you have an array for which the i^th element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:
 *
 * - You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 * - After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
 *
 * ## Example
 *
 * ```bash
 * Input: [1,2,3,0,2]
 * Output: 3
 * Explanation: transactions = [buy, sell, cooldown, buy, sell]
 * ```
 */
export type Solution = (prices: number[]) => number;

/**
 * @date
 * @time
 * @space
 */
export const maxProfit = (prices: number[]): number => {
  return 3;
};

// [1,2,3,0,2] 多次买卖
// 1-2 4-5 、1-3、1-4、1-5
// 2-3、2-4、2-5
// 3-4、3-5
// 4-5

// [1,2,3,0,2,7,1,9]
// 1-2 4-5 7-8、1-3 5-6、1-4 6-8、1-5、

// 每次走 三个台阶 or
11;
