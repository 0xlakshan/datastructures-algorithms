/**
 * Sum All Numbers in a Range
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
 * For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 * */ 

function sumAll(arr) {

    let largeNum;
    let smallNum;
  
    if (arr[0] > arr[1]) {
      largeNum = arr[0];
      smallNum = arr[1];
    } else {
      largeNum = arr[1];
      smallNum = arr[0];
    }
  
    let result = 0;
    for (let i = smallNum; i <= largeNum; i++) {
      console.log(i);
      result += i;
    }
  
    return result;
}
  
sumAll([1, 4]);

/**
 * Diff Two Arrays
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 * Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
  const newArr = [];
  
  let arrayOne = arr1;
  let arrayTwo = arr2;

  for (let x = 0; x < 2; x++) {
    for (let i = 0; i < arrayOne.length; i++) {
      let isMatchingItemFound = false;
      for (let j = 0; j < arrayTwo.length; j++) {
        if (arrayOne[i] === arrayTwo[j]) {
          isMatchingItemFound = true;
        }
      }
      if (isMatchingItemFound === false) {
        newArr.push(arrayOne[i]);
      }
    }
    // change the array order
    arrayOne = arr2;
    arrayTwo = arr1;
  }

  return newArr;
}


diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub" ], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
