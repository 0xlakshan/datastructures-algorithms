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