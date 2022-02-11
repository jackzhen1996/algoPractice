# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def buildTree(self, preorder, inorder):
        """
        :type preorder: List[int]
        :type inorder: List[int]
        :rtype: TreeNode
        """
        
        # preorder = root, left , right
        # inorder = left, root, right
        
        # use preorder to locate the current root, which is always the first element, preorder[0]
        # find the location of current root in inorder, call it mid, use this mid to partition the preorder array, where preorder[1:mid+1] = every node in left tree
        # and preorder[mid+1:] = every node in left tree 
        # 
        
        if not preorder or not inorder:
            return None
        
        root = TreeNode(preorder[0])
        mid = inorder.index(preorder[0])
        root.left = self.buildTree(preorder[1:mid+1 ], inorder[:mid])
        root.right = self.buildTree(preorder[mid+1:], inorder[mid+1:])
        
        return root