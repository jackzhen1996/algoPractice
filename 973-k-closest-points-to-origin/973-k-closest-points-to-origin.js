/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    // naive way
    // iterate the array and calculate the distance, then sort the array of distances, and return the 0th to k - 1 th items
    
    const positions = []
    for (const point of points) {
        const x = point[0]
        const y = point[1]
        const distance = Math.sqrt(x*x + y*y)
        positions.push({point,distance})
    }
    
    positions.sort((a,b)=>a.distance-b.distance)
    const sortedPoints = positions.map((position)=>position.point)
    return sortedPoints.splice(0, k)
};