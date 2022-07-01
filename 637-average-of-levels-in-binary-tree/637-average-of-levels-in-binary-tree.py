# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        # run bfs and calculate average
        
        q = collections.deque([root])
        answer = []
        while len(q) > 0:
            l = len(q)
            curr = []
            sum = 0
            for i in range(0,l):
                node = q.popleft()
                sum += node.val
                    
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            answer.append(sum/l)
        return answer
                
        