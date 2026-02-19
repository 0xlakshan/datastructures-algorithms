const { getAlgorithm } = require('./algorithm_registry');

function runBenchmark(algorithmName, data, target = null) {
  const algorithm = getAlgorithm(algorithmName);

  const startTime = process.hrtime.bigint();
  const result = target ? algorithm(data, target) : algorithm(data);
  const endTime = process.hrtime.bigint();

  const timeSeconds = Number(endTime - startTime) / 1e9;

  const resultObj = {
    algorithm: algorithmName,
    dataset_size: data.length,
    result: result,
    time_seconds: timeSeconds
  };

  console.log(JSON.stringify(resultObj, null, 2));
  return resultObj;
}

module.exports = { runBenchmark };
