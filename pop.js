function nextGenSize(prevGen, rate) {
  return Math.floor(prevGen / 2 * rate)
}

function countAlive(gens, lastAlive, year, minAge) {
  let count = 0
  const newest = year - minAge
  for (let i = lastAlive; i < gens.length; i++) {
    if (newest >= gens[i].year) {
      count += gens[i].count
    }
  }
  return count
}

function updateLastAlive(gens, lastAlive, year, lifeExp) {
  const oldest = year - lifeExp
  while (lastAlive < gens.length && oldest > gens[lastAlive].year) {
    lastAlive++
  }
  return lastAlive
}

function popSize(initial, rate, time, genSpan, lifeExp, minAge) {
  let year = 1
  let gens = [{ count: initial, year }]
  let lastAlive = 0
  const genCount = Math.ceil(time / genSpan)

  for (let i = 0; i < genCount; i++) {
    year += genSpan
    const count = nextGenSize(gens[gens.length - 1].count, rate)
    gens.push({ count, year })
    lastAlive = updateLastAlive(gens, lastAlive, year, lifeExp)
  }

  return countAlive(gens, lastAlive, year, minAge)
}

console.log(popSize(20, 2.4, process.argv[2], 25, 45, 0))
