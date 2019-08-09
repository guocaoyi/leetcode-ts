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
let twoSum: (numbers: number[], target: number) => number[];

/**
 * @status
 */
twoSum = (numbers: number[], target: number): number[] => {
  let i = 0;
  let p;
  for (; i < numbers.length; i += 1) {
    p = i + 1;
    while (numbers[i] + numbers[p] < target) {
      p += 1;
    }
    if (numbers[i] + numbers[p] === target) {
      break;
    } else if (numbers[i] + numbers[p] > target) {
      continue;
    }
  }
  return [i + 1, p + 1];
};

export default twoSum;
