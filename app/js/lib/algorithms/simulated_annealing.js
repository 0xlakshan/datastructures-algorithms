const SimulatedAnnealing = {
  simulated_annealing(arr, maxIterations = 1000, initialTemp = 1000, coolingRate = 0.995) {
    let current = [...arr].sort(() => Math.random() - 0.5);
    let best = [...current];
    let temp = initialTemp;

    const cost = (arr) => arr.reduce((sum, x, i) => sum + x * i, 0);
    let currentCost = cost(current);

    for (let i = 0; i < maxIterations; i++) {
      const neighbor = [...current];
      const idx1 = Math.floor(Math.random() * neighbor.length);
      const idx2 = Math.floor(Math.random() * neighbor.length);
      [neighbor[idx1], neighbor[idx2]] = [neighbor[idx2], neighbor[idx1]];

      const neighborCost = cost(neighbor);
      const delta = neighborCost - currentCost;

      if (delta < 0 || Math.exp(-delta / temp) > Math.random()) {
        current = neighbor;
        currentCost = neighborCost;
      }

      if (currentCost < cost(best)) best = [...current];
      temp *= coolingRate;
    }
    return best;
  }
};

module.exports = SimulatedAnnealing;
