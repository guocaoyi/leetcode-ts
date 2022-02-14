function findLength(A: number[], B: number[]): number {
  let subArrayStr = [] // 用短数组
  // Math.min(A.length, B.length)
  [A, B] = A.length <= B.length ? [A, B] : [B, A];
  return 0;
} // find the shorter array C
// find Array C subArray ,length from C.length -> 1
// cache the subArray.join('')
// iterator anthor Array to equals
