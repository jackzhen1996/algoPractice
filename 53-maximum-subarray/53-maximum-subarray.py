import sys 
class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 1:
            return nums[0]
        
        # edge case: if nums.length == 1, then this is the largest sum
        
        # kadane's algorithm
        # global max
        # for any nums[i], the curr max subarray is either nums[i] or nums[i] + currMax
        # currMax is either nums[i] or nums[i] + currMax
        # keep adding on to currMax until currMax > max, then max = currMax
        
        # return max after loop exits
        
        currMax = nums[0]
        globalMax = nums[0]
        
        for i in range(1, len(nums)):
            currMax = max(nums[i], nums[i]+currMax)
            if currMax > globalMax:
                globalMax = currMax
        
        return globalMax
    
        # easy way
        # nested iterations with i and j as pointers
        # keep track of maxSum, and currentSum = currentSum + nums[j]
        # compare maxSum with currentSum every jth iteration
        # at the end, maxSum should be yielded
        
        # time: O(n^2), space: O(1)
        
#         maxSum = -sys.maxint
#         for i in range(len(nums)):
#             currentSum = 0
#             for j in range(i, len(nums)):
#                 currentSum = currentSum + nums[j]
#                 maxSum = max(currentSum, maxSum)

#         return maxSum
        
        
        
        