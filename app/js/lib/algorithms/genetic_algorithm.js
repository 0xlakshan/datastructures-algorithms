const GeneticAlgorithm = {
  genetic_algorithm(arr, populationSize = 50, generations = 100, mutationRate = 0.1) {
    const targetSum = arr.reduce((a, b) => a + b, 0);
    let population = Array.from({ length: populationSize }, () => [...arr].sort(() => Math.random() - 0.5));

    for (let g = 0; g < generations; g++) {
      const fitness = population.map(ind => Math.abs(ind.reduce((a, b) => a + b, 0) - targetSum));
      const maxFit = Math.max(...fitness);
      const matingPool = population.map((ind, i) => ({ ind, fit: maxFit - fitness[i] }))
        .sort((a, b) => b.fit - a.fit).slice(0, populationSize / 2).map(p => p.ind);

      const nextGeneration = [...matingPool];
      while (nextGeneration.length < populationSize) {
        const parent1 = matingPool[Math.floor(Math.random() * matingPool.length)];
        const parent2 = matingPool[Math.floor(Math.random() * matingPool.length)];
        const crossoverPoint = Math.floor(Math.random() * parent1.length);
        const child = [...parent1.slice(0, crossoverPoint), ...parent2.slice(crossoverPoint)];
        const mutated = child.map(x => Math.random() < mutationRate ? arr[Math.floor(Math.random() * arr.length)] : x);
        nextGeneration.push(mutated);
      }
      population = nextGeneration;
    }
    return population.reduce((best, ind) => {
      const indScore = Math.abs(ind.reduce((a, b) => a + b, 0) - targetSum);
      const bestScore = Math.abs(best.reduce((a, b) => a + b, 0) - targetSum);
      return indScore < bestScore ? ind : best;
    }, population[0]);
  }
};

module.exports = GeneticAlgorithm;
