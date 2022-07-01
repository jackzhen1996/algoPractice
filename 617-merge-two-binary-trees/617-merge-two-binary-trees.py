# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        
        # if nodes position overlaps => sum up values 
        # if doesnt overlap, means one is null but the other is not:
        # use the one with value
        
        if root2 is None and root1 is None:
            return None
        if root1 is None and root2:
            return root2
        if root2 is None and root1:
            return root1
        
        node = TreeNode(root1.val + root2.val)
        node.left = self.mergeTrees(root1.left, root2.left)
        node.right= self.mergeTrees(root1.right, root2.right)
        
        return node 
        