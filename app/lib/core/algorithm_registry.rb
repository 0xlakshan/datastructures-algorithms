# frozen_string_literal: true

require_relative "../algorithms/sorting"
require_relative "../algorithms/searching"
require_relative "../algorithms/k_means"
require_relative "../algorithms/simulated_annealing"
require_relative "../algorithms/genetic_algorithm"

module AlgorithmRegistry
  ALGORITHMS = {
    "quick_sort" => Sorting.method(:quick_sort),
    "merge_sort" => Sorting.method(:merge_sort),
    "bubble_sort" => Sorting.method(:bubble_sort),
    "insertion_sort" => Sorting.method(:insertion_sort),
    "heap_sort" => Sorting.method(:heap_sort),
    "radix_sort" => Sorting.method(:radix_sort),
    "linear_search" => Searching.method(:linear_search),
    "binary_search" => Searching.method(:binary_search),
    "ternary_search" => Searching.method(:ternary_search),
    "exponential_search" => Searching.method(:exponential_search),
    "k_means" => KMeans.method(:k_means),
    "simulated_annealing" => SimulatedAnnealing.method(:simulated_annealing),
    "genetic_algorithm" => GeneticAlgorithm.method(:genetic_algorithm)
  }.freeze

  module_function

  def list
    ALGORITHMS.keys
  end

  def get(name)
    ALGORITHMS[name.to_s.downcase]
  end

  def exists?(name)
    ALGORITHMS.key?(name.to_s.downcase)
  end
end
