from collections import deque

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def isSame(root, subRoot):
    # base case
    
    if root is None and subRoot is None:
        return True
    
    if root is None or subRoot is None:
        return False
    
    if root.val != subRoot.val:
        return False
    
    return isSame(root.left, subRoot.left) and isSame(root.right, subRoot.right)

class Solution(object):
    def isSubtree(self, root, subRoot):
        """
        :type root: TreeNode
        :type subRoot: TreeNode
        :rtype: bool
        """
        if root.left is None and root.right is None and subRoot.left is None and subRoot.right is None:
            return root.val == subRoot.val
        
        q = deque([root])
        foundSubTree = False
        while len(q) > 0:
            if foundSubTree:
                return True
            
            # pop the first one off the queue                
            # add its chlidren to queue
            
            # compare root val and subroot val
                # if same: use isSame()
            currentRoot = q.popleft()
            
            if currentRoot.val == subRoot.val:
                foundSubTree = isSame(currentRoot, subRoot)
            
            if currentRoot.left is not None:
                q.append(currentRoot.left)
            
            if currentRoot.right is not None:
                q.append(currentRoot.right)
        
        return foundSubTree
            