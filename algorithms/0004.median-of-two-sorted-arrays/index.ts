/**
 * 递归
 * @time 2019.1.4
 * @status Accepted
 * @runtime 168ms | 19.48%
 * @memory 15.8MB |
 */
var findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const findKth = (nums1: number[], nums2: number[], k: number): number => {
    var m: number = nums1.length;
    var n: number = nums2.length;
    if (m > n) {
      return findKth(nums2, nums1, k);
    }
    if (m === 0) {
      return nums2[k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[0], nums2[0]);
    }
    var pa = Math.floor(k / 2) < m ? Math.floor(k / 2) : m;
    var pb = k - pa;
    if (nums1[pa - 1] < nums2[pb - 1]) {
      var t1 = nums1.slice(pa);
      return findKth(t1, nums2, k - pa);
    } else if (nums1[pa - 1] > nums2[pb - 1]) {
      var t2 = nums2.slice(pb);
      //nums2.splice(0,pb);
      return findKth(nums1, t2, k - pb);
    } else {
      return nums1[pa - 1];
    }
  };

  var m = nums1.length;
  var n = nums2.length;
  var tol = m + n;
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
