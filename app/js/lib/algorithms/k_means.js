const KMeans = {
  k_means(data, k = 3, maxIterations = 100) {
    data = data.map(x => [x, 0]);
    let centroids = data.slice().sort(() => Math.random() - 0.5).slice(0, k).map(([x]) => [x, 0]);

    for (let iter = 0; iter < maxIterations; iter++) {
      const assignments = data.map(([x]) => {
        const closest = centroids.reduce((min, [c]) => {
          const dist = (x - c) ** 2;
          return dist < min.dist ? { centroid: c, dist } : min;
        }, { centroid: centroids[0][0], dist: Infinity }).centroid;
        return [x, closest];
      });

      const newCentroids = [...new Set(assignments.map(([_, c]) => c))].map(clusterId => {
        const points = assignments.filter(([_, c]) => c === clusterId).map(([x]) => x);
        const avg = points.reduce((a, b) => a + b, 0) / points.length;
        return [avg, clusterId];
      });

      if (JSON.stringify(newCentroids.map(([c]) => c)) === JSON.stringify(centroids.map(([c]) => c))) break;
      centroids = newCentroids;
    }
    return data.map(([x]) => [x, centroids.findIndex(([c]) => c === x) || 0]);
  }
};

module.exports = KMeans;
