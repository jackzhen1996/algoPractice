# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        # dfs on the tree to find the subroot
        # then perform another dfs to see if same tree
        
        def isSameTree(a,b):
            if not a and not b:
                return True
            elif not a or not b or a.val != b.val:
                return False
            
            return isSameTree(a.left, b.left) and isSameTree(a.right, b.right)
        
        stack = [root]
        while len(stack) > 0:
            node = stack.pop()
            
            if node.val == subRoot.val and isSameTree(node,subRoot):
                return True
            
            if node:
                if node.left:
                    stack.append(node.left)
                if node.right:
                    stack.append(node.right)
                    
            
        return False
        