# frozen_string_literal: true

module KMeans
  module_function

  def k_means(data, k = 3, max_iterations = 100)
    data = data.map { |x| [x.to_f, 0] }
    centroids = data.sample(k).map { |x,| [x, rand] }

    max_iterations.times do
      assignments = data.map do |x, _|
        [x, centroids.min_by { |c,| (x - c)**2 }.first]
      end

      new_centroids = assignments.group_by(&:last).map do |cluster_id, points|
        avg = points.map(&:first).sum / points.size
        [avg, cluster_id]
      end

      break if new_centroids.map(&:first) == centroids.map(&:first)
      centroids = new_centroids
    end

    data.map { |x,| [x, centroids.find_index { |c,| c == x } || 0] }
  end
end
