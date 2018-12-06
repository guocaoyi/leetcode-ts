"""
"""


class Solution:
    def longestCommonPrefix(self, strs):
        # step1:默认第一个字符串解构 strArray<[0,1,2,...,n]>
        # step2:开始访问a[1]-a[n-1]
        # step3:开始便利strArray，如果遇到不相等，就停止遍历，如果遍历长度>1,则开始下一个值的遍历；
        """
            :type strs: List[str]
            :rtype: str
            """
