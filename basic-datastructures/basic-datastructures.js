/* Check For The Presence of an Element With indexOf() */

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) === -1) {
    return false;
  } else {
    return true;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


/**
 * Iterate Through All an Array's Items Using For Loops - 
 * We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed. 
 */

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      let currentNestedArray = arr[i];    
      
      let isElementIncluded = false;
  
      for (let j = 0; j < currentNestedArray.length; j++) {
        let currentElement = currentNestedArray[j];
  
        if (currentElement === elem) {
          isElementIncluded = true;
        }
    
      }
      isElementIncluded || newArr.push(currentNestedArray);
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9], [1, 5, 2]], 3));


/**
 * Iterate Through the Keys of an Object with a for...in Statement
 * We've defined a function countOnline which accepts one argument, allUsers. Use a for...in statement inside this function to loop through the allUsers object and return the number of users whose online property is set to true. An example of an object which could be passed to countOnline is shown below. Each user will have an online property set to either true or false.
 * */

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let counter = 0;
  
    for (const user in allUsers) {
      // // console.log(allUsers[user].online)
      if (allUsers[user].online) {
        counter++;
      }
    }
  
    return counter;
    // Only change code above this line
  }
  
  console.log(countOnline(users));

/*
Question: Find Symmetric Difference of Two Arrays Using Sets
Given two arrays A and B, write a function to return the symmetric difference of the sets formed by these arrays.
The symmetric difference of two sets is the set of elements that are in either of the sets but not in both.
Example
A = [1, 2, 3, 4];
B = [3, 4, 5, 6];
Output: [1, 2, 5, 6]
*/
function symmetricDifference(A, B) {
  const setA = new Set(A);
  const setB = new Set(B);
  const result = [];

  for (const item of setA) {
    if (!setB.has(item)) {
      result.push(item);
    }
  }

  for (const item of setB) {
    if (!setA.has(item)) {
      result.push(item);
    }
  }
  return result;
}

const A = [1, 2, 3, 4];
const B = [3, 4, 5, 6];
console.log(symmetricDifference(A, B));

