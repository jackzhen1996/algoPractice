class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # assume 
        # not ordered
        # can repeat 
        # exactly one solution
        # easy solution
        
        # for i in range(0, len(nums)):
        #     for j in range(i+1, len(nums)):
        #         if (nums[i] + nums[j] == target):
        #             return [i,j]
        
        # two pass hash
        
#         dict = {}
# time: O(n), space: dict takes up O(n)
#         for i in range(0, len(nums)):
#             dict[nums[i]] = i
            
# time: O(n), space: no change in space from previous step
#         for i in range(0, len(nums)):
#             diff = target - nums[i]
#             if (diff in dict and i != dict[diff]):
#                 return [i, dict[diff]]
            
# one pass hash
# time: O(n), space: O(n)
        dict = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in dict and i != dict[diff]:
                return [i, dict[diff]]
            dict[nums[i]] = i
        