/**
 * fibonacci(uncached)
 * @param n number
 */
export const fib = (n: number): number =>
  n === 0 || n === 1 ? n : fib(n - 1) + fib(n - 2);

/**
 * fibonacci(cached)
 * @param n number
 * @param m cacheMap
 */
export const _fib = (n: number, m: any = { 0: 0, 1: 1 }): number =>
  n in m ? m[n] : [m[n] = _fib(n - 1, m) + _fib(n - 2, m), m[n]][1];
