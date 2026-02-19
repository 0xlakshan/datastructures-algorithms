const Sorting = require('./sorting');

const Searching = {
  linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return null;
  },

  binarySearch(arr, target) {
    const sorted = Sorting.quickSort([...arr]);
    let left = 0;
    let right = sorted.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sorted[mid] === target) return mid;
      if (sorted[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return null;
  },

  ternarySearch(arr, target) {
    const sorted = Sorting.quickSort([...arr]);
    let left = 0;
    let right = sorted.length - 1;

    while (left <= right) {
      const mid1 = left + Math.floor((right - left) / 3);
      const mid2 = right - Math.floor((right - left) / 3);

      if (sorted[mid1] === target) return mid1;
      if (sorted[mid2] === target) return mid2;

      if (target < sorted[mid1]) {
        right = mid1 - 1;
      } else if (target > sorted[mid2]) {
        left = mid2 + 1;
      } else {
        left = mid1 + 1;
        right = mid2 - 1;
      }
    }
    return null;
  },

  exponentialSearch(arr, target) {
    const sorted = Sorting.quickSort([...arr]);
    if (sorted[0] === target) return 0;

    let i = 1;
    while (i < sorted.length && sorted[i] < target) {
      i *= 2;
    }

    const binaryRangeStart = Math.floor(i / 2);
    const binaryRangeEnd = Math.min(i, sorted.length - 1);

    let left = binaryRangeStart;
    let right = binaryRangeEnd;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sorted[mid] === target) return mid;
      if (sorted[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return null;
  }
};

module.exports = Searching;
