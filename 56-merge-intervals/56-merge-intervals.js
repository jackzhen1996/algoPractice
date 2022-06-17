/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const res = []
    intervals.sort((a,b)=> a[0] - b[0])

    let i = 1
    let newInterval = intervals[0]
    
    console.log(newInterval)
    while (i <= intervals.length - 1) {
        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval)
            newInterval = intervals[i]
        } else if (newInterval[1] >= intervals[i][0]) {
            newInterval = [Math.min(newInterval[0],intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
            console.log('why', {newInterval, interval:intervals[i]})
        }
        i++
    }
    
    res.push(newInterval)
    

    
    return res
};