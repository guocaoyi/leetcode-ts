/**
 * @time 2018.10.19
 * @status Output Limit Exceeded
 * @input `"unpvlhkldvfzvzwdfhojkyczxydauiioxzlkhvvmqamnakrfrhqefsddqifmqocpnoawlvjcyxpyhifbqxhxpkchuivky"`
 */
var lengthOfLongestSubstring = (s: string): number => {
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
var lengthOfLongestSubstring = (s: string): number => {
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
