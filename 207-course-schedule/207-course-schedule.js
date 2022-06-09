/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const map = {}
    const set = new Set()
    for (let i = 0; i < numCourses; i++) {
        map[i] = []
    }
    
    for (const [course, preq] of prerequisites) {
        map[course].push(preq)
    }
    
    const dfs = function(course) {
        if(set.has(course)) {
            return false
        }

        if (map[course].length === 0) {
            return true
        }
        set.add(course)

        const preqs = map[course]
        for (const preq of preqs) {
            const result = dfs(preq)
            if (!result) {
                return false
            }
            
        }
        map[course] = []
        set.delete(course)
        
        return true
        
    }
    
    for (let i = 0; i < numCourses;i++) {
        if (!dfs(i)) {
            return false
        }
    }
    
    return true
};