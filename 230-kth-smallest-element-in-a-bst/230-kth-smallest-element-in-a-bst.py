# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def kthSmallest(self, root, k):
        """
        :type root: TreeNode
        :type k: int
        :rtype: int
        """        
        # edge case: if one node only, kth smallest is that one node
        
            
        count = []
        
        def inorderSearch(node, count):
            if not node:
                return 
            
            inorderSearch(node.left, count)
            
            count.append(node.val)
            
            inorderSearch(node.right, count)
        
        inorderSearch(root,count)
        return count[k-1]
            
            