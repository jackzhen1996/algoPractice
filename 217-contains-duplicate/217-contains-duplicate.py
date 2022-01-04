class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        if len(nums) == 1:
            return False
        
        # brute force way   
#         for i in range(len(nums)-1):
#             for j in range(i+1, len(nums)):
#                 if nums[i] == nums[j]:
#                     return True
                
#         return False
    
    
        # set way
    
        hash = set()
        # iterate thru the array
            # if the current number is in set:
                # that means it's repeating:
                    # return True
            # if the current number is not in set:
                # that means keep adding to the set
    
        # all numbers are distinct
        
        for num in nums:
            if num in hash:
                return True
            hash.add(num)
        
        return False