function sendSpaceship(name, captain) {
    const spaceship = {
        name,
        captain,
        speed: 28,
        inMission: true,
        crew: []
    };
    alert(`Hello, world! Olá, mundo!, a nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão`);
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}..`);
    }
    else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`);
    }
    else {
        alert(`Mantendo a velocidade da ${spaceship.name}...`);
    }
}
const spaceshipName = prompt('insira o nome da nave a ser enviada.');
const spaceshipCaptain = prompt('insira o nome do capitão da nave');
sendSpaceship(spaceshipName, spaceshipCaptain);
const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
const speed = Number(prompt('Insira a velocidade para a qual deseja acelerar:'));
accelerate(speed, currentShip);
