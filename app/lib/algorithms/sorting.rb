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

  def insertion_sort(arr)
    arr = arr.dup
    (1...arr.length).each do |i|
      key = arr[i]
      j = i - 1
      while j >= 0 && arr[j] > key
        arr[j + 1] = arr[j]
        j -= 1
      end
      arr[j + 1] = key
    end
    arr
  end

  def heap_sort(arr)
    arr = arr.dup
    n = arr.length

    (n / 2 - 1).downto(0) { |i| heapify(arr, n, i) }

    (n - 1).downto(1) do |i|
      arr[0], arr[i] = arr[i], arr[0]
      heapify(arr, i, 0)
    end
    arr
  end

  def heapify(arr, n, i)
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    largest = left if left < n && arr[left] > arr[largest]
    largest = right if right < n && arr[right] > arr[largest]

    if largest != i
      arr[i], arr[largest] = arr[largest], arr[i]
      heapify(arr, n, largest)
    end
  end

  def radix_sort(arr)
    return arr if arr.empty?
    max = arr.max
    exp = 1
    output = arr.dup

    while max / exp > 0
      buckets = Array.new(10) { [] }
      output.each do |num|
        buckets[(num / exp) % 10] << num
      end
      output = buckets.flatten
      exp *= 10
    end
    output
  end
end
