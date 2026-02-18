# frozen_string_literal: true

require_relative "../algorithms/sorting"
require_relative "../algorithms/searching"

module AlgorithmRegistry
  ALGORITHMS = {
    "quick_sort" => Sorting.method(:quick_sort),
    "merge_sort" => Sorting.method(:merge_sort),
    "bubble_sort" => Sorting.method(:bubble_sort),
    "linear_search" => Searching.method(:linear_search),
    "binary_search" => Searching.method(:binary_search)
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
