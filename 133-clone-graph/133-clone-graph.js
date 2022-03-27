/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */


var cloneGraph = function(node) {
    // if no node then return a list ? 
    if (node == null) {
        return 
    }
    
    const clonedAlready = {}
    
    const dfs = function(node) {
        // create a new node from the current reference node
        // create list for neighbors for new node
        // iterate through neighbors of reference node
            // push the children node to the new node neighborlist
            // dfs on each neighbor

        // return new node 

        if (clonedAlready[node.val]) {
            return clonedAlready[node.val]
        }

        const newNode = new Node(node.val, [])

        clonedAlready[newNode.val] = newNode

        for (let i = 0; i < node.neighbors.length; i++) {
            newNode.neighbors.push(dfs(node.neighbors[i]))
        }

        return newNode
    }
    
    // use dfs to traverse the entire graph and construct the graph
    return dfs(node)
};