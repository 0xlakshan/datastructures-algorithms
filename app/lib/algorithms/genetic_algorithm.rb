# frozen_string_literal: true

module GeneticAlgorithm
  module_function

  def genetic_algorithm(arr, population_size = 50, generations = 100, mutation_rate = 0.1)
    target_sum = arr.sum
    population = Array.new(population_size) { arr.shuffle }

    generations.times do
      fitness = population.map { |ind| (ind.sum - target_sum).abs }
      max_fit = fitness.max
      mating_pool = population.zip(fitness).sort_by { |_, f| max_fit - f }.map(&:first).take(population_size / 2)

      next_generation = mating_pool.dup
      while next_generation.length < population_size
        parent1, parent2 = mating_pool.sample(2)
        crossover_point = rand(parent1.length)
        child = parent1[0...crossover_point] + parent2[crossover_point..]
        child = child.map { |x| rand < mutation_rate ? arr.sample : x }
        next_generation << child
      end
      population = next_generation
    end

    population.min_by { |ind| (ind.sum - target_sum).abs }
  end
end
