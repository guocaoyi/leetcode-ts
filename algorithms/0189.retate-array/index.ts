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
let rotate: (nums: number[], k: number) => void;

/**
 */
rotate = (nums: number[], k: number): void => {
  if (k === 0 || nums.length === 0) {
    return;
  }
  let ret: number = k % nums.length;
  if (ret === 0) {
    return;
  }
  for (let i = 0; i < ret; i++) {}
};

export default rotate;
