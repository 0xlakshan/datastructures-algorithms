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