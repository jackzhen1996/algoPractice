# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:
        # record depth, and record parent
        # if same depth diff parent = cousin
        # else not cousin
        # node = [level, parentVal]
        xNode = []
        yNode = []
        
        def dfs(parent, node, depth):
            if node is None: return

            if node.val == x:
                print('haj')
                xNode.append(depth)
                xNode.append(parent.val if parent else -1)
            
            elif node.val == y:
                print('waa')
                yNode.append(depth)
                yNode.append(parent.val if parent else -1)
            
            dfs(node, node.left, depth + 1)
            dfs(node, node.right, depth + 1)
                
        dfs(None, root, 1)
        return xNode[0] == yNode[0] and xNode[1] != yNode[1]
        