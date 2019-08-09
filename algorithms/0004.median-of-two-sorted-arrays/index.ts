`
4. Median of Two Sorted Arrays

There are two sorted arrays \`nums1\` and \`nums2\` of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume \`nums1\` and \`nums2\` cannot be both empty.

"""
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
"""

"""
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
"""

>>> Array,Binary Search,Divide and Conquer
`;
let findMedianSortedArrays: (nums1: number[], nums2: number[]) => number;

/**
 * 递归
 * @time 2019.1.4
 * @status Accepted
 * @runtime 168ms | 19.48%
 * @memory 15.8MB |
 */
findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const findKth = (nums1: number[], nums2: number[], k: number): number => {
    let m: number = nums1.length;
    let n: number = nums2.length;
    if (m > n) {
      return findKth(nums2, nums1, k);
    }
    if (m === 0) {
      return nums2[k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[0], nums2[0]);
    }
    let pa = Math.floor(k / 2) < m ? Math.floor(k / 2) : m;
    let pb = k - pa;
    if (nums1[pa - 1] < nums2[pb - 1]) {
      let t1 = nums1.slice(pa);
      return findKth(t1, nums2, k - pa);
    } else if (nums1[pa - 1] > nums2[pb - 1]) {
      let t2 = nums2.slice(pb);
      //nums2.splice(0,pb);
      return findKth(nums1, t2, k - pb);
    } else {
      return nums1[pa - 1];
    }
  };

  let m = nums1.length;
  let n = nums2.length;
  let tol = m + n;
  if (tol / 2 - Math.floor(tol / 2) > 0.1) {
    return findKth(nums1, nums2, Math.floor(tol / 2) + 1);
  } else {
    return (
      (findKth(nums1, nums2, Math.floor(tol / 2)) +
        findKth(nums1, nums2, Math.floor(tol / 2) + 1)) /
      2
    );
  }
};

export default findMedianSortedArrays;
