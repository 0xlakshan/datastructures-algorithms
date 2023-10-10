## Insertion sort

A[n] - A array's n index
A[1:n] - sorting A array's index 1 to n

```
const numberList = [9, 3, 10, 2 , 8, 5, 1];

for (let i = 1; i < numberList.length; i++) {
  let currentValue = numberList[i];
  let j;
  for (j = i - 1; j >= 0 && numberList[j] > currentValue; j--) {
    numberList[j + 1] = numberList[j];
  }
  numberList[j + 1] = currentValue;
}

console.log(numberList);
```