/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  // if no head, return no head
  // iterate through the old list
  
  if (head == null) {
      return null
  }
  
  const oldToNew = new WeakMap()
  const dfs = function(oldNode) {
      // base cases
      if (oldNode == null) {
          return null
      }
      
      if (oldToNew.has(oldNode)) {
          return oldToNew.get(oldNode)
      }
      
      let newNode = new Node(oldNode.val)
      oldToNew.set(oldNode,newNode)
      
      newNode.next = dfs(oldNode.next)
      newNode.random = dfs(oldNode.random)

      return newNode
  }
  console.log('wat')
  return dfs(head)
};