# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        self.found = False
        def dfs(node,sum):
            if node is None:
                return
            
            if node.left is None and node.right is None and sum + node.val == targetSum:
                self.found = True
                return
            
            dfs(node.left, sum + node.val)
            dfs(node.right, sum + node.val)
        dfs(root, 0)
        return self.found
            
        