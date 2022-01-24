class Solution(object):
        
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        # edge cases:
        if len(nums) == 1:
            return 0 if nums[0] == target else -1
                
        left = 0
        right = len(nums)-1
        while right >= left: 
            mid = left + (right - left)//2

            if nums[mid] == target:
                return mid
            
            if nums[mid] > nums[right]:
                if target < nums[mid] and target >= nums[left]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if target > nums[mid] and target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1
                    
        return -1
            
        