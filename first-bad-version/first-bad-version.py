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
        # as long as left is less than, keep looping
        while left < right:
            middle = (left + right) // 2
            # check if middle is bad
            if isBadVersion(middle):
                # if so, move right pointer towards the left
                right = middle
            else:
                # if left, move left pointer to the right
                left = middle + 1
        # we read from left to right
        return left
        