/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    // minimize ( or make it equal to truck size ) the number of boxes, maximize the number of units 
    
    // goal: grab higest number of units starting from the beginning
    // as long as the number of current boxes does not > truckSize, we'll keep adding the next box type
    
    // track currentUnits, currentTruckSize
    // each step: check how many of the current boxtypes we can actually grab
    // [[1,3], [2,2], [3,1]]
    // grab 1 of type1 => 1x3 = 3
    // grab 2 of type2 => 2x3 = 4
    // grab 1 of type3 => 1x1 = 1
        // total = 8
    boxTypes = boxTypes.sort((a,b)=>b[1] - a[1])
    let currentUnits = 0
    let currentBoxes = 0
    let i = 0
    while (i < boxTypes.length && currentBoxes < truckSize) {
        // check how many of the current boxe type we can grab
        // check if truckSize - currentBoxes => maximum we can grab
        const maximumToGrab =  truckSize - currentBoxes
        if (maximumToGrab >= boxTypes[i][0]) {
            currentUnits += boxTypes[i][0] * boxTypes[i][1]
            currentBoxes += boxTypes[i][0]
        } else {
            currentUnits += maximumToGrab * boxTypes[i][1]
            currentBoxes += maximumToGrab
        }
        i++
    }
    
    return currentUnits
};