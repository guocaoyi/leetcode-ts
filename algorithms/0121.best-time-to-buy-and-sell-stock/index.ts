/**
 * 121. Best Time to Buy and Sell Stock
 *
 * Say you have an array for which the i^th element is the price of a given stock on day i.
 *
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 *
 * Note that you cannot sell a stock before you buy one.
 *
 * ## Example
 *
 * ```bash
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *              Not 7-1 = 6, as selling price needs to be larger than buying price.
 * ```
 * ```bash
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * ```
 */
export type Solution = (prices: number[]) => number;

/**
 * @date 2020/07/10 08:30:00
 * @time O(n)
 * @space O(n)
 * @runtime
 * @memory
 * @runtime_cn 72 ms, faster than 92.11%
 * @memory_cn 36.5 MB, less than 100.00%
 */
export const maxProfit = (prices: number[]): number => {
  let rMax: number = prices[prices.length - 1];
  let maxDiff = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    rMax = Math.max(prices[i], rMax);
    maxDiff = Math.max(rMax - prices[i], maxDiff);
  }
  return maxDiff;
};
