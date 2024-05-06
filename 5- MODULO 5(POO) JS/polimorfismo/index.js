class Vehicle {
    move() {
        console.log("o veículo está se movendo.")
    }
}

class Car extends Vehicle {
    move() {
        console.log("o carro está se movendo")
    }
}

class Ship extends Vehicle {
    move() {
        console.log("o navio está navegando.")
    }
}

class Aircraft extends Vehicle {
    move (speed) {
        console.log(`a aeronave está se movendo a ${speed}km de distância`)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()


// delorean.move()
// blackPearl.move()
// epoch.move(80)

function start(vehicle) {
    console.log("iniciando um veículo...")
    vehicle.move()
}

start(delorean)
start(blackPearl)
start(epoch)