# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root is None:
            return 0
        
        self.maxHeight = 0
        
        def dfs(currentHeight, node):
            
            currentHeight += 1
            self.maxHeight = max(self.maxHeight, currentHeight)
            
            if node.right is None and node.left is None:
                return
            
            if node.left is not None:
                dfs(currentHeight, node.left)
            if node.right is not None:
                dfs(currentHeight, node.right)
                
        dfs(0, root)
        return self.maxHeight