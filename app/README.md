# Algorithm Benchmark CLI (Ruby & JavaScript)

Benchmark sorting and searching algorithms against JSON datasets and measure execution time. Compare Ruby vs JavaScript implementations.

## Project Structure

```
app/
├── bin/
│   └── benchmark          # Main CLI (Ruby)
├── js/
│   └── lib/
│       ├── algorithms/    # JavaScript implementations
│       └── core/          # JS core modules
├── lib/
│   ├── algorithms/        # Ruby implementations
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

## Main CLI Usage (Ruby)

```bash
# Ruby implementation (default)
./bin/benchmark --algorithm quick_sort --file data/sample.json
./bin/benchmark --algorithm heap_sort --file data/large.json

# JavaScript implementation
./bin/benchmark --algorithm quick_sort --file data/sample.json --js

# Compare Ruby vs JavaScript
./bin/benchmark --algorithm quick_sort --file data/sample.json --compare
./bin/benchmark --algorithm merge_sort --file data/large.json --compare

# Searching (requires --target)
./bin/benchmark --algorithm binary_search --file data/sample.json --target 45
./bin/benchmark --algorithm binary_search --file data/sample.json --target 45 --compare
```

## Options

| Flag | Description |
|------|-------------|
| `--algorithm NAME` | Algorithm to run (required) |
| `--file PATH` | Path to JSON dataset (required) |
| `--target VALUE` | Target value for search algorithms |
| `--js` | Run JavaScript implementation |
| `--compare` | Run both Ruby and JS, show comparison |

## Output Format

**Single implementation:**
```json
{
  "language": "ruby",
  "algorithm": "quick_sort",
  "dataset_size": 15,
  "result": [7, 11, 12, 19, 22, 23, 25, 34, 41, 45, 56, 64, 78, 88, 90],
  "time_seconds": 0.000023,
  "memory_mb": 0.0
}
```

**Comparison (`--compare`):**
```json
{
  "ruby": { "language": "ruby", "algorithm": "quick_sort", "time_seconds": 0.000023, ... },
  "js": { "algorithm": "quick_sort", "time_seconds": 0.000072, ... },
  "comparison": {
    "time_ratio": 3.07,
    "faster": "ruby"
  }
}
```
