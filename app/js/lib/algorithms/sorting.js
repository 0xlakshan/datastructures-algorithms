function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
}

const Sorting = {
  quickSort,
  mergeSort,
  merge,

  bubbleSort(arr) {
    const result = [...arr];
    const n = result.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (result[j] > result[j + 1]) {
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
      }
    }
    return result;
  },

  insertionSort(arr) {
    const result = [...arr];
    for (let i = 1; i < result.length; i++) {
      const key = result[i];
      let j = i - 1;
      while (j >= 0 && result[j] > key) {
        result[j + 1] = result[j];
        j--;
      }
      result[j + 1] = key;
    }
    return result;
  },

  heapSort: function(arr) {
    const result = [...arr];
    const n = result.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(result, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      [result[0], result[i]] = [result[i], result[0]];
      heapify(result, i, 0);
    }
    return result;
  }
};

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

Sorting.radixSort = function(arr) {
  if (arr.length === 0) return arr;
  const max = Math.max(...arr);
  let exp = 1;
  let output = [...arr];

  while (Math.floor(max / exp) > 0) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (const num of output) {
      buckets[Math.floor(num / exp) % 10].push(num);
    }
    output = buckets.flat();
    exp *= 10;
  }
  return output;
};

module.exports = Sorting;
