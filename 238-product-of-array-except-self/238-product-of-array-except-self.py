class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # find left product array for each arr[i]
        # find right product array for each arr[i]
        # multiply both product arrays
        
        mulLeft = 1
        left = [0]*len(nums)
        for i in range(len(nums)):
            left[i] = mulLeft
            mulLeft = mulLeft*nums[i]
            
        mulRight = 1
        right = [0]*len(nums)
        for i in range(len(nums)-1, -1, -1):
            right[i] = mulRight
            mulRight = mulRight*nums[i]
            
        answer = [0]*len(nums)
        for i in range(len(nums)):
            answer[i] = right[i]*left[i]
            
        return answer
            
        