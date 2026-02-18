# frozen_string_literal: true

require "benchmark"

module BenchmarkRunner
  module_function

  def run(algorithm, data, *args)
    result = nil
    memory_before = memory_usage
    time = Benchmark.realtime { result = algorithm.call(data, *args) }
    memory_after = memory_usage

    {
      result: result,
      time: time,
      memory: memory_after - memory_before
    }
  end

  def memory_usage
    `ps -o rss= -p #{$$}`.to_f / 1024
  end
end
