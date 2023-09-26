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


/**
 * Seek and Destroy
 * You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 * The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
 * */ 

function destroyer(arr, ...rest) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let equalItems = false;
    for (let j = 0; j < rest.length; j++) {
      if (arr[i] === rest[j]) {
        equalItems = true;
      }
    }
    if (equalItems === false) {
      newArray.push(arr[i]);
    }
  }
  
  return newArray;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/**
 * Spinal Tap Case
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {

  const lettersArr = str.split("");

  const newArr = lettersArr.map((item, index, arr) => {
    if (item.toUpperCase() !== item.toLowerCase()) {
      const upperCaseConverted = item.toUpperCase();
      if (item === upperCaseConverted && index !== 0) {
        return "-" + item;
      } else {
        return item;
      }
    } else {
      return " ";
    } 
  });

  const addedDash = newArr.map((item, index, arr) => {
    if (newArr.length - 1 !== index) {
      const nextItemArr = newArr[index + 1].split("");
      if (item === " " && nextItemArr.length !== 2) {
        return "-";
      } else {
        return item;
      }
    } else {
      return item;
  }
  });

  const spacesRemoved = addedDash.filter(item => item !== " ");
  
  const stringConverted = spacesRemoved.join("");
  const lowerCaseConverted = stringConverted.toLowerCase();
  console.log(lowerCaseConverted);
  return lowerCaseConverted;
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things")