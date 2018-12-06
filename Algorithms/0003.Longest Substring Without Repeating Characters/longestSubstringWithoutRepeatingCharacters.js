/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Example 1:
 *  Input: "abcabcbb"
 *  Output: 3 
 *  Explanation: The answer is "abc", with the length of 3.  
 * Example 2:
 *  Input: "bbbbb"
 *  Output: 1
 *  Explanation: The answer is "b", with the length of 1.
 * Example 3:
 *  Input: "pwwkew"
 *  Output: 3
 *  Explanation: The answer is "wke", with the length of 3. 
 *    Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
class LengthOfLongestSubstring {

  /**
   * @param {string} s
   * @return {number}
   * 987test case,132ms
   */
  slution1 = () => {
    let maxSub = '',
      currentSub = '';
    const arr = s.split('');
    arr.forEach(s => {
      if (currentSub.includes(s)) {
        // 存在
        if (currentSub.length >= maxSub.length) {
          maxSub = currentSub;
        }
        let [lStr, rStr] = currentSub.split(s);
        currentSub = (rStr || '');
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
  }

  /**
   * @param {string} s
   * @return {number}
   * 987test case,184ms
   */
  slution2 = () => {
    const obj = {
      subStr: '',
      maxLen: 0,
    };
    for (let i = 0; i < s.length; i++) {
      let strArray = obj.subStr.split(s[i]);
      obj.subStr = strArray[strArray.length - 1] + s[i];
      obj.maxLen = Math.max(obj.maxLen, obj.subStr.length);
    }
    return obj.maxLen;
  }

}