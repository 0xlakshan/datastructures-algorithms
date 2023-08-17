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