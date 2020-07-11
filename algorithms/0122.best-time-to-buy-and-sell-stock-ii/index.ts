/**
 * 122. Best Time to Buy and Sell Stock II
 *
 * Say you have an array `prices` for which the i^th element is the price of a given stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
 * 
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 * 
 * ## Example
 * 
 * ```bash
 * Input: [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 *              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 * ```
 * ```bash
 * Input: [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 *              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
 *              engaging multiple transactions at the same time. You must sell before buying again.
 * ```
 * ```bash
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * ```
 * 
 * ## Constrains
 * 
 * - 1 <= prices.length <= 3 * 10 ^ 4
 * - 0 <= prices[i] <= 10 ^ 4
 */
export type Solution = (prices: number[]) => number;

/**
 * DP算法
 * @date
 * @time
 * @space
 */
export const maxProfit = (prices: number[]): number => {
  let maxSell = Math.floor(prices.length / 2)
  for (let i = 1; i <= maxSell; i++) {
    // 背包算法
  }
  return 1;
};
// 1次买卖行为 > 1-2 1-3 1-4 1-5 | 2-3 2-4 2-5 | 3-4 3-5 | 4-5
// 2次买卖行为 > 1-2 & 3-4 , 1-2 & 3-5 , 1-3 & 4-5 | 2-3 & 4-5
// ...n/2次卖卖行为

// 1次买卖行为 > 1-2 1-3 1-4 1-5 | 2-3 2-4 2-5 | 3-4 3-5 | 4-5
// 2次买卖行为 > 1-2 & 3-4 , 1-2 & 3-5 , 1-3 & 4-5 | 2-3 & 4-5
// ...n/2次卖卖行为