class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        # if nums length is 0, then return []
        if len(nums) == 0 or len(nums) == 1:
            return []
        # if nums length is 1, return [] 
        
        # brute force way => use three nested loops, find all possible combinations of sum(nums[i and j and k]) == target
        
        nums.sort()
        # if all the same number, then no need to go through the solution, because no same number other than 0 can add to 0
        answer = []
        for i in range(0, len(nums)-1):
            # check for dup
            if i > 0 and nums[i] == nums[i-1]:
                continue
        
            l = i + 1
            r = len(nums)-1
            target = 0 - nums[i]

            
            while r > l:
                if nums[r] + nums[l] > target:
                    r-=1 
                elif nums[r] + nums[l] < target:
                    l+=1
                else:
                    answer.append([nums[i], nums[l], nums[r]])
                    r-=1 
                    l+=1
                    
                    while (r > l and nums[l] == nums[l-1]):
                        l+=1 
                    while (r > l and nums[r] == nums[r+1]):
                        r-=1
            
        return answer
                        
                    
                    
                
                
        
        
        
        