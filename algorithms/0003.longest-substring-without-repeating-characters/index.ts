/**
 * 987test case,132ms
 */
var slution = (s: string): number => {
  let maxSub = "",
    currentSub = "";
  const arr = s.split("");
  arr.forEach((s: string) => {
    if (currentSub.includes(s)) {
      // 存在
      if (currentSub.length >= maxSub.length) {
        maxSub = currentSub;
      }
      let [lStr, rStr] = currentSub.split(s);
      currentSub = rStr || "";
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
 * 987test case,184ms
 */
var slution = (s: string): number => {
  const obj = {
    subStr: "",
    maxLen: 0
  };
  for (let i: number = 0; i < s.length; i++) {
    let strArray: string[] = obj.subStr.split(s[i]);
    obj.subStr = strArray[strArray.length - 1] + s[i];
    obj.maxLen = Math.max(obj.maxLen, obj.subStr.length);
  }
  return obj.maxLen;
};
