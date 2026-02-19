const Sorting = require('../algorithms/sorting');
const Searching = require('../algorithms/searching');

const algorithms = {
  quick_sort: Sorting.quickSort,
  merge_sort: Sorting.mergeSort,
  bubble_sort: Sorting.bubbleSort,
  insertion_sort: Sorting.insertionSort,
  heap_sort: Sorting.heapSort,
  radix_sort: Sorting.radixSort,
  linear_search: Searching.linearSearch,
  binary_search: Searching.binarySearch,
  ternary_search: Searching.ternarySearch,
  exponential_search: Searching.exponentialSearch
};

function getAlgorithm(name) {
  const algorithm = algorithms[name];
  if (!algorithm) {
    throw new Error(`Unknown algorithm: ${name}`);
  }
  return algorithm;
}

function listAlgorithms() {
  return Object.keys(algorithms);
}

module.exports = { getAlgorithm, listAlgorithms };
