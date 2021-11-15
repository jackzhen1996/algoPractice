# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

class Solution(object):
    def firstBadVersion(self, n):
        # binary search with a single loop 
        # keep left and right index
        left = 0
        right = n
        # calculate middle
        # as long as left is less than or equal to end, keep looping
        while left < right:
            middle = (left + right) // 2
            if isBadVersion(middle):
                right = middle
            else:
                left = middle + 1
        return left
        # if middle is good, then the first bad is on the right
        # if middle is bad, then the first bad is on the left
        