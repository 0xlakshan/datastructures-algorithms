#!/usr/bin/env node

const { loadDataset } = require('../lib/core/dataset_loader');
const { runBenchmark } = require('../lib/core/benchmark_runner');
const { listAlgorithms } = require('../lib/core/algorithm_registry');

const args = process.argv.slice(2);
const options = {};

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--algorithm' || args[i] === '-a') {
    options.algorithm = args[++i];
  } else if (args[i] === '--file' || args[i] === '-f') {
    options.file = args[++i];
  } else if (args[i] === '--target' || args[i] === '-t') {
    options.target = parseInt(args[++i]);
  } else if (args[i] === '--list') {
    console.log('Available algorithms:');
    listAlgorithms().forEach(name => console.log(`  - ${name}`));
    process.exit(0);
  } else if (args[i] === '--help' || args[i] === '-h') {
    console.log('Usage: node bin/benchmark.js --algorithm <name> --file <path> [--target <value>]');
    console.log('Options:');
    console.log('  --algorithm, -a  Algorithm name');
    console.log('  --file, -f      Path to JSON data file');
    console.log('  --target, -t    Target value for search algorithms');
    console.log('  --list          List all available algorithms');
    console.log('  --help, -h      Show this help message');
    process.exit(0);
  }
}

if (!options.algorithm || !options.file) {
  console.error('Error: --algorithm and --file are required');
  console.error('Use --help for usage information');
  process.exit(1);
}

try {
  const data = loadDataset(options.file);
  runBenchmark(options.algorithm, data, options.target);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
