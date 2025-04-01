/**
 * Convert Celsius to Fahrenheit
 * The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
 * You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
*/
function convertCtoF(celsius) {
    let fahrenheit = celsius*9/5+32;
    return fahrenheit;
}

convertCtoF(30);


/**
 * Reverse a String
 * For example, "hello" should become "olleh".
*/
function reverseString(str) {
    let reverseStrArray = [];
    let strArray = str.split('');
    for (let i = strArray.length - 1; i >= 0; i--) {
        console.log(i)
        reverseStrArray.push(strArray[i]);
    }
    let strConverted = reverseStrArray.join('')
    console.log(strConverted);
    return strConverted;
}
  
reverseString("hello");


/**
 * Factorialize a Number
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 * Factorials are often represented with the shorthand notation n!
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * Only integers greater than or equal to zero will be supplied to the function.
 * */ 
function factorialize(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
        console.log(i);
    }
    console.log(factorial);
    return factorial;
}
  
factorialize(5);

/**
 * Find the Longest Word in a String
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
*/
function findLongestWordLength(str) {
    const arrOfWords = str.split(' ');
    let largest = 0;
    for (let i = 0; i < arrOfWords.length; i++) {
        if (arrOfWords[i].length > largest) {
        largest = arrOfWords[i].length;
        }
    }
    console.log(largest);
    return largest;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");

/**
 * Return Largest Numbers in Arrays
 * Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
 * Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 * */ 
function largestOfFour(arr) {
    let largestNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      let innerArray = arr[i];
      let largestNumberInInnerArray = 0;
      for (let j = 0; j < innerArray.length; j++) {
        if (j === 0) {
          largestNumberInInnerArray = innerArray[j];
        }
        if (innerArray[j] > largestNumberInInnerArray) {
          largestNumberInInnerArray = innerArray[j];
        }
      }
      largestNumbers.push(largestNumberInInnerArray);
    }
    console.log(largestNumbers);
    return largestNumbers;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

/**
 * Confirm the Ending
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
 * */ 
function confirmEnding(str, target) {
    // return str;
    const strArray = str.split("");
    const givenArray = target.split("");
    // console.log(givenArray.length)
    let counter = 0;
    let isGivenStrSame = true;
    for (let i = strArray.length - 1; 0 < i ; i--) {
  
      const strLetter = strArray[i];
      const givenStrLetter = givenArray[givenArray.length - counter - 1];
  
      if (strLetter !== givenStrLetter) {
        isGivenStrSame = false;
      }
  
      if (counter === givenArray.length - 1) {
        break;
      }
      counter++;
    }
    console.log(isGivenStrSame);
    return isGivenStrSame;
}
confirmEnding("Bastian hello", "hello");

/**
 * Repeat a String Repeat a String
 * Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
 * */ 
function repeatStringNumTimes(str, num) {
    const strArray = [];
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            strArray.push(str);
        }
    }
    return strArray.join("");
}
repeatStringNumTimes("abc", 3);

/**
 * Truncate a String
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
 * */
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }

  let newLettersArr = []

  for (let i = 0; i < num; i++) {
    newLettersArr.push(str[i]);
  }

  let joinedLetters = `${newLettersArr.join("")}...`;
  return joinedLetters;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

/**
 * Finders Keepers
 * Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
 * */
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    let answer = func(arr[i]);
    if (answer) {
      num = arr[i];
      break;
    } else {
      num = undefined;
    }
  }
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/**
 * Boo who
 * Check if a value is classified as a boolean primitive. Return true or false.
 * Boolean primitives are true and fals
*/
function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}

booWho(false);

/**
 * Title Case a Sentence
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like the and of.
 * */ 
function titleCase(str) {
  let letterArr = [];
  let isPreviousItemIsASpace = false;
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      letterArr.push(str[i].toUpperCase());
    } else if (isPreviousItemIsASpace) {
      letterArr.push(str[i].toUpperCase());
    } else {
      letterArr.push(str[i].toLowerCase());
    }

    if (str[i] === " ") {
      isPreviousItemIsASpace = true;
    } else {
      isPreviousItemIsASpace = false;
    }
  }

  let finalSentence = letterArr.join("");
  return finalSentence;
}

titleCase("I'm a little tea pot");


/**
 * Falsy Bouncer
 * Remove all falsy values from an array. Return a new array; do not mutate the original array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. 
*/

function bouncer(arr) {
  // return arr;
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i]) {
      filteredArray.push(arr[i]);
      console.log(true);
    } else {
      console.log(false);
    }
  }
  console.log(filteredArray);
  return filteredArray
}

bouncer([7, "ate", "", false, 9]);


/**
 * Where do I Belong
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
 * Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/ 

function getIndexToIns(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      count++;
    }
  }
  return count;
}

getIndexToIns([10, 20, 30, 40, 50], 30);


/**
 * Mutations
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 * For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
 * The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
 * Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr) {
  const originalLettersArr = arr[0].split("");
  const matchingLettersArr = arr[1].split("");

  let isAllLettersMatching = true;

  for (let i = 0; i < matchingLettersArr.length; i++) {
    let isLetterMatching = false;
    let currentLetter = matchingLettersArr[i];

    for (let j = 0; j < originalLettersArr.length; j++) {
      if (originalLettersArr[j].toLowerCase() === currentLetter.toLowerCase()) {
        isLetterMatching = true;
      }
    }
    if (isLetterMatching === false) {
      isAllLettersMatching = false;
    }
  }
  return isAllLettersMatching;
}

mutation(["hello", "hey"]);


/**
 * Chunky Monkey
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let tempArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i]);
    if (tempArr.length === size) {
      newArr.push(tempArr);
      tempArr = [];
    }
  }

  if (tempArr.length > 0) {
    newArr.push(tempArr);
  }

  console.log(newArr);
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);


/**
 * Pig Latin
 * Pig Latin is a way of altering English Words. The rules are as follows:
 * - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
 * - If a word begins with a vowel, just add way at the end.
 * Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

/*
notes -
identify consonant and wovels
 if consonant mutate the word and update accordingly
  loop through letters and look for wovel
    if wovel not found in word add ay at the end and return
    if wovel found move the cluster to the end and return ay
 if wovel mutate the word and update accordingly
*/

function translatePigLatin(str) {
  const wovels = ['a', 'e', 'i', 'o', 'u'];
  const wordsArr = str.split("");

  let isWovel = false;
  let firstWovelPosition = 0;
  let firstConsonants = [];

  wordsArr.forEach((item, index) => {
    if (index === 0 && wovels.includes(item)) {
      isWovel = true;
    }

    if (wovels.includes(item) && firstWovelPosition === 0) {
      firstWovelPosition = index;
    }

    if (wovels.includes(item) === false && firstWovelPosition === 0) {
      firstConsonants.push(item);
    }
  });

  let constructedWord;

  if (isWovel) {
    wordsArr.push('w', 'a', 'y');
    constructedWord = wordsArr;
  } else {
    if (firstWovelPosition === 0) {
      wordsArr.push('a', 'y');
      constructedWord = wordsArr;
    } else {
      const newArray = wordsArr.slice(firstWovelPosition, wordsArr.length);
      firstConsonants.forEach((item) => {
        newArray.push(item);
      });
      newArray.push('a', 'y');
      constructedWord = newArray;
    }
  }

  const stringConverted = constructedWord.join("");
  return stringConverted;
}

translatePigLatin("consonant");
translatePigLatin("rhythm");
translatePigLatin("schwartz");
translatePigLatin("california");
translatePigLatin("algorithm");


/**
 * Search and Replace
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
  const arrayOfWords = str.split(" ");
  const newArray = arrayOfWords.map((word) => {
    if (word === before) {
      if (word[0] === word[0].toUpperCase()) {
        let letterArray = after.split("");
        let convertedFirstLetter = after[0].toUpperCase();
        letterArray[0] = convertedFirstLetter;
        let stringConverted = letterArray.join("");
        return stringConverted;
      } else if (word[0] === word[0].toLowerCase()) {
        let letterArray = after.split("");
        let convertedFirstLetter = after[0].toLowerCase();
        letterArray[0] = convertedFirstLetter;
        let stringConverted = letterArray.join("");
        return stringConverted;
      } else {
        return after;
      }
    } else {
      return word;
    }
  });

  const stringConvertedWords = newArray.join(" ");
  console.log(stringConvertedWords);
  return stringConvertedWords;
}

myReplace("Let us go to the store", "store", "mall")
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("I think we should look up there", "up", "Down");
myReplace("This has a spellngi error", "spellngi", "spelling")
myReplace("His name is Tom", "Tom", "john")
myReplace("Let us get back to more Coding", "Coding", "algorithms")


/**
 * DNA Pairing
 * Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
 * The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 * */ 

function pairElement(str) {
  const strArray = str.split("");
  const dnaStrands = [];

  strArray.forEach((item) => {
    const strandPair = []
    switch(item) {
      case "A":
        strandPair.push(item, "T");
        break;
      case "T":
        strandPair.push(item, "A");
        break;
      case "C":
        strandPair.push(item, "G");
        break;
      case "G":
        strandPair.push(item, "C");
        break;
    }

    dnaStrands.push(strandPair);
  });

  return dnaStrands;

}

pairElement("GCG");
pairElement("ATCGA");
pairElement("TTGAG");
pairElement("CTCTA");



/*
Given an array of integers nums and an integer target, return the indices of two numbers that add up to the target. Assume exactly one solution exists, and you may not use the same element twice.
*/

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}



/*
Find the First Non-Repeating Element
Given an array of integers, find and return the first element that does not repeat. If all elements repeat, return null.
*/

function firstNonRepeating(arr) {
  const countMap = new Map();

  // First pass: count occurrences
  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // Second pass: find the first with count = 1
  for (let num of arr) {
    if (countMap.get(num) === 1) {
      return num;
    }
  }

  return null; // All elements repeat
}

// Test cases
console.log(firstNonRepeating([4, 5, 1, 2, 0, 4])); // 5
console.log(firstNonRepeating([1, 2, 2, 1]));       // null
console.log(firstNonRepeating([7]));                // 7



/*
Given a string, find the length of the longest substring without repeating characters.
Input: "abcabcbb"
Output: 3
*/

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
