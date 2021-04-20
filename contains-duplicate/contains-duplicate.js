/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //loop thru array and add to set to verify uniqueness
    //if item repeats then that means set.has() returns true
    var set = new Set()
    for (const num of nums) {
        if (set.has(num)) {
            return true
        }
        set.add(num)
    }
    return false
};