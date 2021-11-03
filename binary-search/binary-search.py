import math

class Solution(object):
    def search(self, nums, target):
        
        def binSearch(nums, l, r):
            if (l > r):
                return -1
        
            if nums[l] == target:
                return l
            if nums[r] == target:
                return r
            
            mid = int(math.floor((r + l)/2))
            
            if nums[mid] == target:
                return mid
            
            if nums[mid] > target:
                # search left
                return binSearch(nums,l,mid-1)
            
            if nums[mid] < target:
                # search right
                return binSearch(nums,mid+1,r)
            
        return binSearch(nums,0, len(nums)-1)
        