
var TimeMap = function() {
    this.map = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    // {key: [{timestamp: value}]}
    if (this.map[key]) {
        this.map[key].push({timestamp, value})
    } else {
        this.map[key] = [{timestamp, value}]
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const arr = this.map[key]
    if (arr){
        // use binary search here ? 
        let l = 0
        let r = arr.length - 1
        let prevStampIndex = null
        while (l <= r) {
            const mid = Math.floor((l+r)/2)
            if (arr[mid].timestamp === timestamp) {
                return arr[mid].value
            }
            
            if (l === r) {
                if (arr[mid].timestamp < timestamp) {
                    return arr[mid].value
                }
                if (mid - 1 >= 0) {
                    return arr[mid-1].value    
                }
            }
            
            if (timestamp > arr[mid].timestamp) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return ''
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */