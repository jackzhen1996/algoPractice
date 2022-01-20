import math
class Solution(object):
    def findMin(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        # edge cases
        if len(nums) == 1 or nums[0] < nums[len(nums)-1]:
            return nums[0]

        # rotated case
        # use binary search
        
        l = 0
        r = len(nums)-1
        
        while r >= l:
            mid = (r-l)//2 + l
            if nums[mid] > nums[mid+1]:
                return nums[mid+1]
            
            if nums[mid] < nums[mid-1]:
                return nums[mid]
            
            if nums[0] > nums[mid]:
                r = r - 1
            elif nums[0] < nums[mid]:
                l = l + 1
            
        return -1
    