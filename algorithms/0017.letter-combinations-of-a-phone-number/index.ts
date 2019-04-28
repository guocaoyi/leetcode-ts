/**
 * 笛卡尔积
 * @time
 * @status
 */
var letterCombinations = function(digits: string) {
  // 拨号键盘
  const keymap: any = {
    2: ['a', 'b', 'c'], // 2
    3: ['d', 'e', 'f'], // 3
    4: ['g', 'h', 'i'], // 4
    5: ['j', 'k', 'l'], // 5
    6: ['m', 'n', 'o'], // 6
    7: ['p', 'q', 'r', 's'], // 7
    8: ['t', 'u', 'v'], // 8
    9: ['w', 'x', 'y', 'z'] // 9
  };

  const s = digits.split('').map(d => keymap[d]);
  let result = [];
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
