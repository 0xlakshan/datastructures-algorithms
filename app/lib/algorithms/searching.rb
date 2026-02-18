# frozen_string_literal: true

module Searching
  module_function

  def linear_search(arr, target)
    arr.each_with_index { |x, i| return i if x == target }
    nil
  end

  def binary_search(arr, target)
    sorted = Sorting.quick_sort(arr)
    left, right = 0, sorted.length - 1

    while left <= right
      mid = (left + right) / 2
      case sorted[mid] <=> target
      when 0 then return mid
      when -1 then left = mid + 1
      else right = mid - 1
      end
    end
    nil
  end
end
