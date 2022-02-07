from collections import deque

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def levelOrder(self, root):
        if root is None:
            return []
        
        if root.left is None and root.right is None:
            return [[root.val]]
        
        answer = []
        q = deque([root])
        
        while len(q) != 0:
            currentLevel = []
            for i in range(len(q)):
                currentNode = q.popleft()
                currentLevel.append(currentNode.val)
                
                if currentNode.left is not None:
                    q.append(currentNode.left)
                if currentNode.right is not None:
                    q.append(currentNode.right)
            answer.append(currentLevel)
            
        
        return answer
        
        
        
        
        