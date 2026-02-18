# frozen_string_literal: true

module Sorting
  module_function

  def quick_sort(arr)
    return arr if arr.length <= 1

    pivot = arr[arr.length / 2]
    left = arr.select { |x| x < pivot }
    middle = arr.select { |x| x == pivot }
    right = arr.select { |x| x > pivot }

    quick_sort(left) + middle + quick_sort(right)
  end

  def merge_sort(arr)
    return arr if arr.length <= 1

    mid = arr.length / 2
    left = merge_sort(arr[0...mid])
    right = merge_sort(arr[mid..])

    merge(left, right)
  end

  def merge(left, right)
    result = []
    until left.empty? || right.empty?
      result << (left.first <= right.first ? left.shift : right.shift)
    end
    result + left + right
  end

  def bubble_sort(arr)
    arr = arr.dup
    n = arr.length
    (0...n).each do |i|
      (0...n - i - 1).each do |j|
        arr[j], arr[j + 1] = arr[j + 1], arr[j] if arr[j] > arr[j + 1]
      end
    end
    arr
  end
end
