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

  def ternary_search(arr, target)
    sorted = Sorting.quick_sort(arr)
    left, right = 0, sorted.length - 1

    while left <= right
      mid1 = left + (right - left) / 3
      mid2 = right - (right - left) / 3

      return mid1 if sorted[mid1] == target
      return mid2 if sorted[mid2] == target

      if target < sorted[mid1]
        right = mid1 - 1
      elsif target > sorted[mid2]
        left = mid2 + 1
      else
        left = mid1 + 1
        right = mid2 - 1
      end
    end
    nil
  end

  def exponential_search(arr, target)
    sorted = Sorting.quick_sort(arr)
    return 0 if sorted[0] == target

    i = 1
    i *= 2 while i < sorted.length && sorted[i] < target

    binary_range_start = i / 2
    binary_range_end = [i, sorted.length - 1].min

    left, right = binary_range_start, binary_range_end
    while left <= right
      mid = (left + right) / 2
      return mid if sorted[mid] == target
      left = mid + 1 if sorted[mid] < target
      right = mid - 1 if sorted[mid] > target
    end
    nil
  end
end
