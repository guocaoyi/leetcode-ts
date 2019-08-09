`
0. \*\*

\*\*\*

"""
\*\*\*
"""

::: \*\*
### \*\*
>>> \*\*
`;
let myPow: (x: number, n: number) => number | string;

/**
 * Math.pow
 * 这里偷懒，直接调用了全局对象 Math 静态方法，Math#pow
 * @time 2019.04.19 10:39
 * @status Acceted
 * @runtime 76 ms > 42.42%
 * @memory 34.2 MB < 13.79%
 */
myPow = (x: number, n: number): number | string => {
  return Math.pow(x, n).toFixed(5);
};

export default myPow;
