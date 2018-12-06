def pivotIndex(self, nums):
    """ 
    :type nums: List[int] :rtype: int 
    """
    if len(nums) == 0:
        return -1
    else:
        rsum = sum(nums[1:len(nums)])
        lsum = 0
        for i in range(0, len(nums)):
            if (lsum == rsum):
                return i
            if i == len(nums)-1:
                return -1
            lsum = lsum + nums[i]
            rsum = rsum - nums[i+1]
        return -1
