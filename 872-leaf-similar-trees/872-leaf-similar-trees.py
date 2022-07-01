# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def dfs(node, list):
            if node is None:
                return
            
            if node.left is None and node.right is None:
                list.append(node.val)
                return list
            
            dfs(node.left, list)
            dfs(node.right, list)
            
            return list
        
        l1 = dfs(root1,[])
        l2 = dfs(root2,[])

        return l1 == l2