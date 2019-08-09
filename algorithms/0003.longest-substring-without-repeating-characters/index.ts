`
3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

"""
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
"""

"""
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
"""

"""
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
"""

>>> Hash Table,String,Sliding Window
`;
let lengthOfLongestSubstring: (s: string) => number;

/**
 * @time 2018.10.19
 * @status Output Limit Exceeded
 * @case `"unpvlhkldvfzvzwdfhojkyczxydauiioxzlkhvvmqamnakrfrhqefsddqifmqocpnoawlvjcyxpyhifbqxhxpkchuivky"`
 */
lengthOfLongestSubstring = (s: string): number => {
  let maxSub = '',
    currentSub = '';

  const arr: string[] = s.split('');
  arr.forEach((s: string) => {
    if (currentSub.includes(s)) {
      // 存在
      if (currentSub.length >= maxSub.length) {
        maxSub = currentSub;
      }
      let [lStr, rStr] = currentSub.split(s);
      currentSub = rStr || '';
      currentSub += s;
    } else {
      // 不存在
      currentSub += s;
      if (currentSub.length >= maxSub.length) {
        maxSub = currentSub;
      }
    }
  });
  return maxSub.length;
};

/**
 *
 * @time 2018.10.19
 * @status Accepted
 * @runtime 116ms | 55.08%
 */
lengthOfLongestSubstring = (s: string): number => {
  let maxSub: string = '',
    currentSub: string = '';

  const arr: string[] = s.split('');
  arr.forEach((s: string) => {
    if (currentSub.includes(s)) {
      // 存在
      if (currentSub.length >= maxSub.length) {
        maxSub = currentSub;
      }
      let [lStr, rStr] = currentSub.split(s);
      currentSub = rStr || '';
      currentSub += s;
    } else {
      // 不存在
      currentSub += s;
      if (currentSub.length >= maxSub.length) {
        maxSub = currentSub;
      }
    }
  });
  return maxSub.length;
};

export default lengthOfLongestSubstring;
