const { memoryUsage } = process;

function runBenchmark(algorithm, data, ...args) {
  const start = Date.now();
  const result = algorithm(data, ...args);
  const end = Date.now();

  return {
    algorithm: algorithm.name,
    dataset_size: data.length,
    result: result,
    time_seconds: (end - start) / 1000,
    memory_mb: (memoryUsage().heapUsed / 1024 / 1024)
  };
}

module.exports = { runBenchmark };
