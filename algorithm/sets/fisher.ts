/**
 * 洗牌算法
 * 有限序列乱序
 * @runtime O(n)
 * @memory O(n)
 */
export const disorder = (arr: number[]): number[] => {
  arr.forEach((v: number, k: number) => {
    let randomIndex = Math.floor(Math.random() * (k + 1));
    [arr[k], arr[randomIndex]] = [arr[randomIndex], v];
  });
  return arr;
};

export let fisher = (array: number[]) => {
  let i = 0;
  while (i < array.length) {
    let replaceIndex = Math.floor(Math.random() * (array.length - 1));
    array[i] = array[i] ^ array[replaceIndex];
    array[replaceIndex] = array[replaceIndex] ^ array[i];
    array[i] = array[i] ^ array[replaceIndex];
    i++;
  }
};

// 添加到 array 原型链上
Array.prototype.fisher = function () {
  this.forEach((v, index) => {
    const replaceIndex = Math.floor(Math.random() * (this.length - 1));
    [this[index], this[replaceIndex]] = [this[replaceIndex], this[index]];
  });
  return this;
};
