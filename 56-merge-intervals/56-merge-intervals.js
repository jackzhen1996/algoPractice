/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // edge case: there's only one interval, return that interval
    if (intervals.length === 1) {
        return intervals
    }
    
    intervals = intervals.sort((a,b)=>a[0]-b[0])
    // const mergedIntervals = []
    
    
    // assume intervals are sorted from smallest to largest by starting point
    // [1,3] , [1,4], [2,1] [2,6] => [1,6] 
    
    // iterate through the intervals
    // outer loop: anchor on one interval
    // inner loop: compare all other intervals with the anchor
        // keep track of current biggest interval, start with the anchor
        // determine if current two intervals have overlap
            // if so, reassign biggest interval with the current interval
    // end of inner loop: push the current biggest interval to the answer 
    
   //  my way
//     let i = 0

//     while (i <= intervals.length - 1) {
//         let j = i + 1
//         let k = 0
//         let currentBiggest = intervals[i]
//         while (j <= intervals.length - 1) {
//             if (currentBiggest[1] >= intervals[j][0]) {
//                 // overlap
//                 currentBiggest = [currentBiggest[0], Math.max(intervals[j][1], currentBiggest[1])]
//                 k = j
//             } 
//             j++
//         }
//         mergedIntervals.push(currentBiggest)
//         if (k > 0) {
//             i = k
//         }
//         i++
        
//     }
    
    // one pass way
    // keep track of lastInterval
    // iterate the interval
        // if overlap: change the make sure the lastInterval captures the largest interval
        // if not overlap: add the interval to answer, reassign interval because we're at a new interval
    
    const mergedIntervals = [intervals[0]]
    
    for (let i = 1; i < intervals.length; i++) {
        const lastEnd = mergedIntervals[mergedIntervals.length-1][1]
        
        // overlaps
        if (lastEnd >= intervals[i][0]) {
            mergedIntervals[mergedIntervals.length-1][1] = Math.max(mergedIntervals[mergedIntervals.length-1][1], intervals[i][1])
        } else {
            mergedIntervals.push(intervals[i])
        }
    }
    
    return mergedIntervals
};