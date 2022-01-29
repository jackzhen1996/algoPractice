class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        # a container needs at least two walls, aka length of height = 2
        
        l = 0
        r = len(height)-1
        maxArea = -(sys.maxint)
        while l < r:
            currentArea = min(height[l],height[r]) * (r - l)
            maxArea = max(currentArea, maxArea)
            
            if height[l] > height[r]:
                r-=1
            elif height[l] < height[r]:
                l+=1
            else:
                r-=1
                l+=1
        
        return maxArea