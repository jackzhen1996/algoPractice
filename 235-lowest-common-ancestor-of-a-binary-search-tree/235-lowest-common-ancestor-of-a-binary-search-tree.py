# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """
    # three cases:
        # 1. both p and q on right subtree, go right
        # 2. both p and q on left subtree, go left
        # 3. p and q are split in left and right: return just the root
        
        if p.val == root.val or q.val == root.val:
            return root
        
        if p.val > root.val and q.val < root.val or p.val < root.val and q.val > root.val:
            return root
        
        if p.val > root.val and q.val > root.val:
            return self.lowestCommonAncestor(root.right, p,q)
            
        if p.val < root.val and q.val < root.val:
            return self.lowestCommonAncestor(root.left, p,q)
            
        
            
        