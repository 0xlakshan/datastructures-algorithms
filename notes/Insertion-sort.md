## Insertion sort (4th edition)

A[n] - A array's n index
A[1:n] - sorting A array's index 1 to n

```
const numberList = [9, 3, 10, 2, 8, 5, 1];

/* 
  iteration 1 - [3, 9, 10, 2, 8, 5, 1]
  
  iteration 2 - [3, 9, 10, 2, 8, 5, 1]
  
  iteration 3 -
  [3, 9, 10, 2, 8, 5, 1]
    [3, 9, 10, 10, 8, 5, 1]
    [3, 9, 9, 10, 8, 5, 1]
    [3, 3, 9, 10, 8, 5, 1]
    [2, 3, 9, 10, 8, 5, 1]
*/ 

for (let i = 1; i < numberList.length; i++) {
  // we store current value in a separate variable because we loose it when we does the umberList[j + 1] = numberList[j] we could lost the umberList[i] value
  let currentValue = numberList[i];
  let j;
  for (j = i - 1; j >= 0 && numberList[j] > currentValue; j--) {
    numberList[j + 1] = numberList[j];
  }
  numberList[j + 1] = currentValue;
}
console.log(numberList);
```

#### Excercises
2.1-1
```
let sequence = [31, 41, 59, 26, 41, 58];
for (let i = 1; i < sequence.length; i++) {
    let currentValue = sequence[i];
    let j;
    for (j = i - 1; j >= 0 && sequence[j] > currentValue; j--) {
        sequence[j + 1] = sequence[j];
    }
    sequence[j + 1] = currentValue;
}
console.log(sequence);
```

2.1-3
```
for (let i = 1; i < sequence.length; i++) {
    let currentValue = sequence[i];
    let j;
    for (j = i - 1; j >= 0 && sequence[j] < currentValue; j--) {
        sequence[j + 1] = sequence[j];
    }
    sequence[j + 1] = currentValue;
}

console.log(sequence);
```

2.1-5
```
function findX() {
    let x = 2
    let sequence = [3, 9, 10, 2, 8, 5, 1];
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === x) {
            return i;
        }
        if (i === sequence.length - 1) {
            return "NIL";
        }
    }
}

console.log(findX());
```

<strong>Loop Invariant</strong>
At each iteration loop checks for current value sequence[i]'s value is equal to X's value, Additionally loop checks whether X's value has been found in any of previous iterations in the end.

<strong>Initialization</strong>
Before loop starts i is set to 1, its begin checking from the first element of the sequence and its checks until 1:N in given sequence array.

<strong>Maintenance</strong>
In each iteration loop checks whether the current index's value sequence[i] is equal to given X's value. If current element became equal to X, the condition returns the index of the current element of the current iteration. indicating that X has been found. and the loop terminates. the algorithm updates i in each iteration to check the next element in the sequence until the end.

<strong>Termination</strong>
There are two situations that the loop gets terminated,
First situation is if loop is able to find the matching index of given X's value it returns the index and also terminates the iteration
Second situation is if loop iteration reached to the last index it returns "NIL" string inidcating that X's value has not been found

## Insertion sort (3rd edition)

2.1-4