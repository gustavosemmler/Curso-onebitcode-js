// Uma Interface é outra maneira de
// declarar um tipo para um objeto,
// portanto funciona de forma semelhante

// Criação de uma interface
interface CelestialBody {
    name: string
    mass: number
  }
  
  // Interfaces podem ser herdadas ou herdar umas às outras
  interface Star extends CelestialBody {
    age: number
    planets: Planet[]
  }
  
  interface Planet extends CelestialBody {
    population: number
    createSatellite: (name: string) => void
  }
  
  let sun: Star = {
    name: "Sol",
    mass: 1.989 * (10 ** 30),
    age: 4.603 * (10 ** 9),
    planets: []
  }

  type Asteroid = CelestialBody & {
    size: number
  }

  // Classes podem implementar interfaces
// Nesse caso ela cria o que chamamos de contrato,
// pois obriga a classe a implementar tudo o que
// foi definido na interface
class MilkyWayPlanet implements Planet {
    // Em typescript precisamos explicitar os atributos da classe dessa forma
    // Veremos mais sobre isso posteriormente
    name: string
    mass: number
    population: number
  
    constructor(name: string, mass: number, population: number) {
      this.name = name
      this.mass = mass
      this.population = population
    }
  
    createSatellite(name: string) {
      // ...
    }
  }