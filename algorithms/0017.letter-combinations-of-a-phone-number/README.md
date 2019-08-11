# 17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![Telephone Keypad](../../assets/images/Telephone-keypad2.svg.png)

## Example

```bash
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

## Note

Although the above answer is in lexicographical order, your answer could be in any order you want.

## Related Topics

- String
- Backtracking

## Thinking

笛卡尔积有很多应用场景：

1. 输入法简拼，快捷打字
2. 电商规格项规格值算 SKU
3. 商品详情页面下单时勾选规格值，根据 SKU 库存排除无货的规格值可选
4. 电商营销场景组合优惠券场景

## Submissions

### I: 笛卡尔积

```typescript
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
```

## Top Ranked
