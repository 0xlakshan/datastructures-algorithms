# Algorithm Benchmark CLI (Ruby & JavaScript)

Benchmark sorting and searching algorithms against JSON datasets and measure execution time.

## Project Structure

```
app/
├── bin/
│   └── benchmark          # Ruby CLI executable
├── js/
│   └── bin/
│       └── benchmark.js   # JavaScript CLI executable
├── lib/
│   ├── algorithms/
│   │   ├── sorting.rb     # 6 sorting algorithms
│   │   └── searching.rb   # 4 searching algorithms
│   └── core/
│       ├── algorithm_registry.rb
│       ├── benchmark_runner.rb
│       └── dataset_loader.rb
├── data/
│   ├── sample.json        # 15 elements
│   ├── large.json         # 1000 elements
│   ├── nearly_sorted.json # 1003 elements (mostly sorted)
│   ├── reversed.json      # 100 elements (reverse sorted)
│   └── duplicates.json    # 200 elements (many duplicates)
└── Gemfile
```

## Available Algorithms

### Sorting
- `quick_sort` - O(n log n) average
- `merge_sort` - O(n log n) guaranteed
- `bubble_sort` - O(n²)
- `insertion_sort` - O(n²)
- `heap_sort` - O(n log n)
- `radix_sort` - O(nk)

### Searching
- `linear_search` - O(n)
- `binary_search` - O(log n)
- `ternary_search` - O(log₃ n)
- `exponential_search` - O(log n)

## Usage (Ruby)

```bash
# Sorting
./bin/benchmark --algorithm quick_sort --file data/sample.json
./bin/benchmark --algorithm heap_sort --file data/large.json

# Searching (require --target)
./bin/benchmark --algorithm binary_search --file data/sample.json --target 45
./bin/benchmark --algorithm ternary_search --file data/sample.json --target 45
```

## Usage (JavaScript)

```bash
# Sorting
node js/bin/benchmark.js --algorithm quick_sort --file data/sample.json
node js/bin/benchmark.js --algorithm heap_sort --file data/large.json

# Searching
node js/bin/benchmark.js --algorithm binary_search --file data/sample.json --target 45
```

## Output Format (JSON)

```json
{
  "algorithm": "quick_sort",
  "dataset_size": 15,
  "result": [7, 11, 12, 19, 22, 23, 25, 34, 41, 45, 56, 64, 78, 88, 90],
  "time_seconds": 0.000031862989999353886
}
```
