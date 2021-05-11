
// input: String strArr
// output: Bool whether or not a binary tree can be formed
function TreeConstructor(strArr) { 
  // edge case: if strArr length is 0, return false
  if (strArr.length === 0) {
    return false;
  }
  // strArr[i] = '(1,2)', children = strArr[i][1], parent = strArr[i][3]

  // convert strArr to array
  // all int are unique
  // children = arr[0], parent = arr[1]
  const arr = strArr.map(str=>[str[1],str[3]]);

  // conditions:
  // 1. each child will have only one parent
  // 2. each parent can only have at most 2 children
  let children = {};
  let parent = {};

  // iterate the array and make sure that the conditions are true
  // if false at any given point, return false
  // if loop exits return true
  for (let i = 0; i < arr.length; i++) {
    // child is already there, return false
    if (children[arr[i][0]] === arr[i][1]) {
      return false;
    }
    // child is not there yet
     else {
       children[arr[i][0]] = arr[i][1]
     }

    // parent is already there, check how many children are there
    if (parent[arr[i][1]]) {
      if (parent[arr[i][1]].length < 2) {
        parent[arr[i][1]].push(arr[i][0]);
      } else {
        return false
      }
    } else {
      // parent is not there yet
      parent[arr[i][1]] = [arr[i][0]];
    }
  }

  return true;
}
   
// keep this function call here 
console.log(TreeConstructor(readline()));
