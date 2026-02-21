# frozen_string_literal: true

module SimulatedAnnealing
  module_function

  def simulated_annealing(arr, max_iterations = 1000, initial_temp = 1000, cooling_rate = 0.995)
    current = arr.shuffle
    best = current.dup
    temp = initial_temp

    max_iterations.times do
      neighbor = current.dup
      i, j = rand(current.length), rand(current.length)
      neighbor[i], neighbor[j] = neighbor[j], neighbor[i]

      current_cost = current.each_with_index.sum { |x, i| x * i }
      neighbor_cost = neighbor.each_with_index.sum { |x, i| x * i }

      delta = neighbor_cost - current_cost
      if delta < 0 || Math.exp(-delta / temp) > rand
        current = neighbor
        current_cost = neighbor_cost if neighbor_cost < current_cost
      end

      best = current.dup if current_cost < best.each_with_index.sum { |x, i| x * i }
      temp *= cooling_rate
    end
    best
  end
end
