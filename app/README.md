# Ruby Algorithm Benchmark CLI

Benchmark algorithms against JSON datasets and measure execution time and memory usage.

## Project Structure

```
app/
├── bin/
│   └── benchmark          # CLI executable
├── lib/
│   ├── algorithms/
│   │   ├── sorting.rb     # quick_sort, merge_sort, bubble_sort
│   │   └── searching.rb   # linear_search, binary_search
│   └── core/
│       ├── algorithm_registry.rb
│       ├── benchmark_runner.rb
│       └── dataset_loader.rb
├── data/
│   └── sample.json        # Test dataset
└── Gemfile
```

## Usage

```bash
# Sorting algorithms
./bin/benchmark --algorithm quick_sort --file data/sample.json
./bin/benchmark --algorithm merge_sort --file data/sample.json
./bin/benchmark --algorithm bubble_sort --file data/sample.json

# Searching algorithms (require --target)
./bin/benchmark --algorithm linear_search --file data/sample.json --target 45
./bin/benchmark --algorithm binary_search --file data/sample.json --target 45
```

## Output Format (JSON)

```json
{
  "algorithm": "quick_sort",
  "dataset_size": 15,
  "result": [7, 11, 12, 19, 22, 23, 25, 34, 41, 45, 56, 64, 78, 88, 90],
  "time_seconds": 0.000031862989999353886,
  "memory_mb": 0.0
}
```
