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
let letterCombinations: (digits: string) => string[];

/**
 * 笛卡尔积
 * @time
 * @status
 */
letterCombinations = (digits: string): string[] => {
  // 拨号键盘
  const keymap: any = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  const s = digits.split('').map(d => keymap[d]);
  let result: any[] = [];
  let stack = [];
  let point = 0;

  for (let i = 0, array = s[point++]; i < array.length; i++) {
    stack.push(array[i]);
    for (let i = 0, array = s[point++]; i < array.length; i++) {
      stack.push(array[i]);
      for (let i = 0, array = s[point++]; i < array.length; i++) {
        stack.push(array[i]);
        for (let i = 0, array = s[point++]; i < array.length; i++) {
          stack.push(array[i]);
          result.push(stack.join(''));
          stack.pop();
        }
        point--;
        stack.pop();
      }
      point--;
      stack.pop();
    }
    point--;
    stack.pop();
  }

  return result;
};
